import { UserProfileInputType } from "@/types/FormType";
import { useMemo } from "react";

export const useFormOptions = () => {
  const genders = [
    { key: "male", value: "男性" },
    { key: "female", value: "女性" },
    { key: "other", value: "その他" },
  ];
  const prefectures = [
    { key: "01", value: "北海道" },
    { key: "02", value: "青森県" },
    { key: "03", value: "岩手県" },
    { key: "04", value: "宮城県" },
    { key: "05", value: "秋田県" },
    { key: "06", value: "山形県" },
    { key: "07", value: "福島県" },
    { key: "08", value: "茨城県" },
    { key: "09", value: "栃木県" },
    { key: "10", value: "群馬県" },
    { key: "11", value: "埼玉県" },
    { key: "12", value: "千葉県" },
    { key: "13", value: "東京都" },
    { key: "14", value: "神奈川県" },
    { key: "15", value: "新潟県" },
    { key: "16", value: "富山県" },
    { key: "17", value: "石川県" },
    { key: "18", value: "福井県" },
    { key: "19", value: "山梨県" },
    { key: "20", value: "長野県" },
    { key: "21", value: "岐阜県" },
    { key: "22", value: "静岡県" },
    { key: "23", value: "愛知県" },
    { key: "24", value: "三重県" },
    { key: "25", value: "滋賀県" },
    { key: "26", value: "京都府" },
    { key: "27", value: "大阪府" },
    { key: "28", value: "兵庫県" },
    { key: "29", value: "奈良県" },
    { key: "30", value: "和歌山県" },
    { key: "31", value: "鳥取県" },
    { key: "32", value: "島根県" },
    { key: "33", value: "岡山県" },
    { key: "34", value: "広島県" },
    { key: "35", value: "山口県" },
    { key: "36", value: "徳島県" },
    { key: "37", value: "香川県" },
    { key: "38", value: "愛媛県" },
    { key: "39", value: "高知県" },
    { key: "40", value: "福岡県" },
    { key: "41", value: "佐賀県" },
    { key: "42", value: "長崎県" },
    { key: "43", value: "熊本県" },
    { key: "44", value: "大分県" },
    { key: "45", value: "宮崎県" },
    { key: "46", value: "鹿児島県" },
    { key: "47", value: "沖縄県" },
  ];
  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i);
    }
    return years;
  }, []);

  const months = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => i + 1);
  }, []);

  const days = useMemo(() => {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  }, []);

  return { prefectures, genders, years, months, days };
};
