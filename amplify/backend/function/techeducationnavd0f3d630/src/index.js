const AWS = require("aws-sdk");

// メール送信ロジック
const sendEmail = async (params) => {
  const ses = new AWS.SES();
  try {
    await ses.sendEmail(params).promise();
    console.log("email sent");
  } catch (err) {
    console.log("error sending email", err);
  }
};

// メインロジック
exports.handler = async (event) => {
  for (const record of event.Records) {
    // INSERTイベントを監視
    if (record.eventName === "INSERT") {
      // ユーザー情報を取得
      const result = record.dynamodb.NewImage;
      const tableName = result.__typename.S;
      const userEmail = result.userEmail.S;
      const userName = result.userName.S;
      // テーブルがContactでユーザーのメールアドレスが存在する場合にメールを送信する
      if (tableName === "Contact" && userEmail) {
        const email = userEmail;
        // メール内容の作成
        const params = {
          Destination: {
            ToAddresses: [email],
          },
          Message: {
            Body: {
              Text: {
                Data: `${userName}様\n\n
                この度はお問い合わせをいただきありがとうございました。\n
                お問い合わせ内容を確認しますので、しばらくお待ちください。\n\n\n
                【テック教育ナビ】
                `,
              },
            },
            Subject: {
              Data: "お問い合わせありがとうございます。【テック教育ナビ】",
            },
          },
          // 環境変数：メール送信元
          Source: process.env.EMAIL_FROM,
        };
        // メール送信実行
        return sendEmail(params);
      }
    }
  }
};
