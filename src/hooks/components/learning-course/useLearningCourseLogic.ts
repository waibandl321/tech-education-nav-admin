export default function useLearningCourseLogic() {
  const headers = [
    { key: "courseName", name: "コース名" },
    { key: "courseURL", name: "コースURL" },
    { key: "couseDetail", name: "コース詳細" },
    { key: "duration", name: "受講期間（単位: ヶ月）" },
    { key: "price", name: "料金" },
    { key: "isAvailableMoneyBack", name: "返金保証の有無" },
    { key: "isAvailableSubsidy", name: "補助金の有無" },
    { key: "onSale", name: "キャンペーンの有無" },
    { key: "purposes", name: "受講目的" },
    { key: "jobTypes", name: "目指す職種" },
    { key: "programmingLanguages", name: "習得できるプログラミング言語" },
    { key: "frameworks", name: "フレームワーク" },
    { key: "paymentOptions", name: "支払い方法" },
    { key: "attendanceType", name: "受講スタイル" },
    { key: "locationPref", name: "オフラインの場合の場所（県、市町村区）" },
    { key: "isMadeToOrder", name: "オーダーメイドカリキュラムの有無" },
    {
      key: "especiallyAudiences",
      name: "特別な受講対象者（学生、子供、主婦、高齢者、障害者など）",
    },
  ];

  return {
    headers,
  };
}
