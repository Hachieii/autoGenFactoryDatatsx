import * as FORMATDATA from "./interfaceFormat.tsx";

export const CARD_STATUS_TYPE_CODE: FORMATDATA.CardStatusTypeCodeFormat[] = [
  {
    code: 0,
    name: [
      { lang: "vi-VN", value: "Mới" },
      { lang: "en-US", value: "New" },
    ],
  },
  {
    code: 1,
    name: [
      { lang: "vi-VN", value: "Chưa hoàn thành" },
      { lang: "en-US", value: "In progress" },
    ],
  },
  {
    code: 2,
    name: [
      { lang: "vi-VN", value: "Đã Hoàn thành" },
      { lang: "en-US", value: "Done" },
    ],
  },
];

export const CARD_CATE_TYPE_CODE: FORMATDATA.CardCateTypeCodeFormat[] = [
  {
    code: 0,
    name: [
      { lang: "vi-VN", value: "Đại số" },
      { lang: "en-US", value: "Algebra" },
    ],
  },
  {
    code: 1,
    name: [
      { lang: "vi-VN", value: "Hình học" },
      { lang: "en-US", value: "Geometry" },
    ],
  },
  {
    code: 2,
    name: [
      { lang: "vi-VN", value: "Lý thuyết" },
      { lang: "en-US", value: "Theory" },
    ],
  },
  {
    code: 3,
    name: [
      { lang: "vi-VN", value: "Công thức" },
      { lang: "en-US", value: "Equation" },
    ],
  },
];
export const chapterTitleList: FORMATDATA.ChapterTitleFormat[] = [{
  label: { id: 1, grade: 6, chapterTitle: "Tập hợp các số tự nhiên" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansD/3.png`),
    ],
    rightAns: ["D", "D", "B"],
  },
}, {
  label: {
    id: 2,
    grade: 6,
    chapterTitle: "Tính chia hết trong tập hợp các số tự nhiên",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansD/3.png`),
    ],
    rightAns: ["C", "D", "A"],
  },
}, {
  label: { id: 3, grade: 6, chapterTitle: "Số nguyên" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansD/3.png`),
    ],
    rightAns: ["D", "A", "C"],
  },
}, {
  label: { id: 4, grade: 6, chapterTitle: "Một số hình phẳng trong thực tiễn" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansD/3.png`),
    ],
    rightAns: ["D", "A", "C"],
  },
}, {
  label: {
    id: 5,
    grade: 6,
    chapterTitle: "Tính đối xứng của hình phẳng trong tự nhiên",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansD/3.png`),
    ],
    rightAns: ["D", "C", "D"],
  },
}, {
  label: { id: 6, grade: 6, chapterTitle: "Phân số" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansD/3.png`),
    ],
    rightAns: ["B", "A", "D"],
  },
}, {
  label: { id: 7, grade: 6, chapterTitle: "Số thập phân" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansD/3.png`),
    ],
    rightAns: ["C", "B", "C"],
  },
}, {
  label: { id: 8, grade: 6, chapterTitle: "Những hình học cơ bản" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansD/3.png`),
    ],
    rightAns: ["A", "B", "A"],
  },
}, {
  label: { id: 9, grade: 7, chapterTitle: "Số hữu tỉ" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansD/3.png`),
    ],
    rightAns: ["D", "A", "B"],
  },
}, {
  label: { id: 10, grade: 7, chapterTitle: "Số thực" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansD/3.png`),
    ],
    rightAns: ["C", "B", "C"],
  },
}, {
  label: { id: 11, grade: 7, chapterTitle: "Góc và đường thẳng song song" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansD/3.png`),
    ],
    rightAns: ["D", "D", "D"],
  },
}, {
  label: { id: 12, grade: 7, chapterTitle: "Tam giác bằng nhau" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansD/3.png`),
    ],
    rightAns: ["D", "D", "D"],
  },
}, {
  label: { id: 13, grade: 7, chapterTitle: "Thu thập và biểu diễn dữ liệu" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansD/3.png`),
    ],
    rightAns: ["B", "D", "A"],
  },
}, {
  label: { id: 14, grade: 7, chapterTitle: "Tỉ lệ thức và đại lượng tỉ lệ" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansD/3.png`),
    ],
    rightAns: ["A", "C", "A"],
  },
}, {
  label: {
    id: 15,
    grade: 7,
    chapterTitle: "Biểu thức đại số và đa thức một biến",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansD/3.png`),
    ],
    rightAns: ["A", "C", "B"],
  },
}, {
  label: {
    id: 16,
    grade: 7,
    chapterTitle: "Làm quen với biến cố và xác suất của biến cố",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansD/3.png`),
    ],
    rightAns: ["C", "B", "B"],
  },
}, {
  label: {
    id: 17,
    grade: 7,
    chapterTitle: "Quan hệ giữa các yếu tố trong một tam giác",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansD/3.png`),
    ],
    rightAns: ["A", "A", "C"],
  },
}, {
  label: { id: 18, grade: 7, chapterTitle: "Một số hình khối trong thực tiễn" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansD/3.png`),
    ],
    rightAns: ["D", "C", "B"],
  },
}, {
  label: { id: 19, grade: 8, chapterTitle: "Đa thức" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansD/3.png`),
    ],
    rightAns: ["B", "A", "C"],
  },
}, {
  label: {
    id: 20,
    grade: 8,
    chapterTitle: "Hằng đẳng thức đáng nhớ và ứng dụng",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansD/3.png`),
    ],
    rightAns: ["A", "C", "B"],
  },
}, {
  label: { id: 21, grade: 8, chapterTitle: "Tứ giác" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansD/3.png`),
    ],
    rightAns: ["B", "D", "A"],
  },
}, {
  label: { id: 22, grade: 8, chapterTitle: "Định lí Thalès" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansD/3.png`),
    ],
    rightAns: ["B", "D", "A"],
  },
}, {
  label: { id: 23, grade: 8, chapterTitle: "Dữ liệu và biểu đồ" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansD/3.png`),
    ],
    rightAns: ["C", "B", "D"],
  },
}, {
  label: { id: 24, grade: 8, chapterTitle: "Phân thức đại số" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansD/3.png`),
    ],
    rightAns: ["A", "D", "B"],
  },
}, {
  label: {
    id: 25,
    grade: 8,
    chapterTitle: "Phương trình bậc nhất và hàm số bậc nhất",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansD/3.png`),
    ],
    rightAns: ["A", "D", "C"],
  },
}, {
  label: {
    id: 26,
    grade: 8,
    chapterTitle: "Mở đầu về tính xác suất của biến cố",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansD/3.png`),
    ],
    rightAns: ["A", "C", "B", ""],
  },
}, {
  label: { id: 27, grade: 8, chapterTitle: "Tam giác đồng dạng" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansD/3.png`),
    ],
    rightAns: ["C", "A", "B"],
  },
}, {
  label: { id: 28, grade: 8, chapterTitle: "Một số hình khối trong thực tiễn" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansD/3.png`),
    ],
    rightAns: ["C", "A", "D"],
  },
}, {
  label: {
    id: 29,
    grade: 9,
    chapterTitle: "Phương trình và hệ hai phương trình bậc nhất hai ẩn",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansD/3.png`),
    ],
    rightAns: ["C", "A", "D"],
  },
}, {
  label: {
    id: 30,
    grade: 9,
    chapterTitle: "Phương trình và bất phương trình bậc nhất một ẩn",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansD/3.png`),
    ],
    rightAns: ["B", "D", "A"],
  },
}, {
  label: { id: 31, grade: 9, chapterTitle: "Căn bậc hai và căn bậc ba" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansD/3.png`),
    ],
    rightAns: ["B", "B", "C"],
  },
}, {
  label: {
    id: 32,
    grade: 9,
    chapterTitle: "Hệ thức lượng trong tam giác vuông",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansD/3.png`),
    ],
    rightAns: ["A", "A", "A"],
  },
}, {
  label: { id: 33, grade: 9, chapterTitle: "Đường tròn" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansD/3.png`),
    ],
    rightAns: ["C", "A", "D"],
  },
}, {
  label: {
    id: 34,
    grade: 9,
    chapterTitle: "Hàm số y = ax^2 (a ≠ 0). Phương trình bậc hai một ẩn",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansD/3.png`),
    ],
    rightAns: ["D", "D", "A"],
  },
}, {
  label: { id: 35, grade: 9, chapterTitle: "Tần số và tần số tương đối" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansD/3.png`),
    ],
    rightAns: ["B", "B", "A"],
  },
}, {
  label: {
    id: 36,
    grade: 9,
    chapterTitle: "Xác suất của biến cố trong một số mô hình xác suất đơn giản",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansD/3.png`),
    ],
    rightAns: ["D", "C", "C"],
  },
}, {
  label: {
    id: 37,
    grade: 9,
    chapterTitle: "Đường tròn ngoại tiếp và đường tròn nội tiếp",
  },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansD/3.png`),
    ],
    rightAns: ["D", "C", "B"],
  },
}, {
  label: { id: 38, grade: 9, chapterTitle: "Một số hình khối trong thực tiễn" },
  data: {
    ques: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ques/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ques/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ques/3.png`),
    ],
    ansA: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansA/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansA/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansA/3.png`),
    ],
    ansB: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansB/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansB/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansB/3.png`),
    ],
    ansC: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansC/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansC/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansC/3.png`),
    ],
    ansD: [
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansD/1.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansD/2.png`),
      require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansD/3.png`),
    ],
    rightAns: ["A", "D", "B"],
  },
}];
export const fillInTheBlankList: FORMATDATA.FillInTheBlankFormat[] = [{
  label: { id: 1, grade: 6, chapterTitle: "Tập hợp các số tự nhiên" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_1/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_1/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_1/ques/3.png`),
  ],
  ans: ["3", "XXIX", "trăm"],
}, {
  label: {
    id: 2,
    grade: 6,
    chapterTitle: "Tính chia hết trong tập hợp các số tự nhiên",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_2/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_2/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_2/ques/3.png`),
  ],
  ans: ["3", "nhỏ nhất", "2"],
}, {
  label: { id: 3, grade: 6, chapterTitle: "Số nguyên" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_3/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_3/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_3/ques/3.png`),
  ],
  ans: ["-99", "35", "nguyên dương"],
}, {
  label: { id: 4, grade: 6, chapterTitle: "Một số hình phẳng trong thực tiễn" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_4/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_4/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_4/ques/3.png`),
  ],
  ans: ["120", "10", "30"],
}, {
  label: {
    id: 5,
    grade: 6,
    chapterTitle: "Tính đối xứng của hình phẳng trong tự nhiên",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_5/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_5/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_5/ques/3.png`),
  ],
  ans: ["5", "2", "6"],
}, {
  label: { id: 6, grade: 6, chapterTitle: "Phân số" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_6/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_6/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_6/ques/3.png`),
  ],
  ans: ["36", "-0,2", "39"],
}, {
  label: { id: 7, grade: 6, chapterTitle: "Số thập phân" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_7/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_7/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_7/ques/3.png`),
  ],
  ans: ["15090000", "75", "20"],
}, {
  label: { id: 8, grade: 6, chapterTitle: "Những hình học cơ bản" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_8/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_8/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_8/ques/3.png`),
  ],
  ans: ["5", "7", "10"],
}, {
  label: { id: 9, grade: 7, chapterTitle: "Số hữu tỉ" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_1/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_1/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_1/ques/3.png`),
  ],
  ans: ["1", "256", "43,75"],
}, {
  label: { id: 10, grade: 7, chapterTitle: "Số thực" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_2/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_2/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_2/ques/3.png`),
  ],
  ans: ["32", "-1,4", "3,(6)"],
}, {
  label: { id: 11, grade: 7, chapterTitle: "Góc và đường thẳng song song" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_3/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_3/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_3/ques/3.png`),
  ],
  ans: ["152", "2", "50"],
}, {
  label: { id: 12, grade: 7, chapterTitle: "Tam giác bằng nhau" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_4/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_4/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_4/ques/3.png`),
  ],
  ans: ["360", "75", "4"],
}, {
  label: { id: 13, grade: 7, chapterTitle: "Thu thập và biểu diễn dữ liệu" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_5/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_5/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_5/ques/3.png`),
  ],
  ans: ["7", "17", "2,5"],
}, {
  label: { id: 14, grade: 7, chapterTitle: "Tỉ lệ thức và đại lượng tỉ lệ" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_6/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_6/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_6/ques/3.png`),
  ],
  ans: ["4", "36", "12"],
}, {
  label: {
    id: 15,
    grade: 7,
    chapterTitle: "Biểu thức đại số và đa thức một biến",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_7/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_7/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_7/ques/3.png`),
  ],
  ans: ["54000", "6", "2"],
}, {
  label: {
    id: 16,
    grade: 7,
    chapterTitle: "Làm quen với biến cố và xác suất của biến cố",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_8/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_8/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_8/ques/3.png`),
  ],
  ans: ["lớn hơn", "1", "5"],
}, {
  label: {
    id: 17,
    grade: 7,
    chapterTitle: "Quan hệ giữa các yếu tố trong một tam giác",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_9/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_9/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_9/ques/3.png`),
  ],
  ans: ["nhỏ hơn", "ba đỉnh", "4"],
}, {
  label: { id: 18, grade: 7, chapterTitle: "Một số hình khối trong thực tiễn" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_10/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_10/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_10/ques/3.png`),
  ],
  ans: ["chữ nhật", "15", "28"],
}, {
  label: { id: 19, grade: 8, chapterTitle: "Đa thức" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_1/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_1/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_1/ques/3.png`),
  ],
  ans: ["384", "999", "1"],
}, {
  label: {
    id: 20,
    grade: 8,
    chapterTitle: "Hằng đẳng thức đáng nhớ và ứng dụng",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_2/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_2/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_2/ques/3.png`),
  ],
  ans: ["-9", "0", "8x"],
}, {
  label: { id: 21, grade: 8, chapterTitle: "Tứ giác" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_3/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_3/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_3/ques/3.png`),
  ],
  ans: ["167", "220", "210"],
}, {
  label: { id: 22, grade: 8, chapterTitle: "Định lí Thalès" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_4/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_4/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_4/ques/3.png`),
  ],
  ans: ["3", "5", "16"],
}, {
  label: { id: 23, grade: 8, chapterTitle: "Dữ liệu và biểu đồ" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_5/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_5/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_5/ques/3.png`),
  ],
  ans: ["hình quạt tròn", "đoạn thẳng", "cột kép"],
}, {
  label: { id: 24, grade: 8, chapterTitle: "Phân thức đại số" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_6/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_6/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_6/ques/3.png`),
  ],
  ans: ["8", "x - y", "6"],
}, {
  label: {
    id: 25,
    grade: 8,
    chapterTitle: "Phương trình bậc nhất và hàm số bậc nhất",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_7/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_7/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_7/ques/3.png`),
  ],
  ans: ["-1", "1", "1"],
}, {
  label: {
    id: 26,
    grade: 8,
    chapterTitle: "Mở đầu về tính xác suất của biến cố",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_8/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_8/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_8/ques/3.png`),
  ],
  ans: ["2", "96", "0,15"],
}, {
  label: { id: 27, grade: 8, chapterTitle: "Tam giác đồng dạng" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_9/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_9/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_9/ques/3.png`),
  ],
  ans: ["12", "12", "2"],
}, {
  label: { id: 28, grade: 8, chapterTitle: "Một số hình khối trong thực tiễn" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_10/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_10/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_10/ques/3.png`),
  ],
  ans: ["60", "4", "5"],
}, {
  label: {
    id: 29,
    grade: 9,
    chapterTitle: "Phương trình và hệ hai phương trình bậc nhất hai ẩn",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_1/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_1/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_1/ques/3.png`),
  ],
  ans: ["7", "7", "-1"],
}, {
  label: {
    id: 30,
    grade: 9,
    chapterTitle: "Phương trình và bất phương trình bậc nhất một ẩn",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_2/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_2/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_2/ques/3.png`),
  ],
  ans: ["2", "2", "1"],
}, {
  label: { id: 31, grade: 9, chapterTitle: "Căn bậc hai và căn bậc ba" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_3/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_3/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_3/ques/3.png`),
  ],
  ans: ["18", "60,4", "9"],
}, {
  label: {
    id: 32,
    grade: 9,
    chapterTitle: "Hệ thức lượng trong tam giác vuông",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_4/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_4/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_4/ques/3.png`),
  ],
  ans: ["10,4", "7,71", "3,97"],
}, {
  label: { id: 33, grade: 9, chapterTitle: "Đường tròn" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_5/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_5/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_5/ques/3.png`),
  ],
  ans: ["lớn nhất", "tiếp xúc trong", "8,5"],
}, {
  label: {
    id: 34,
    grade: 9,
    chapterTitle: "Hàm số y = ax^2 (a ≠ 0). Phương trình bậc hai một ẩn",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_6/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_6/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_6/ques/3.png`),
  ],
  ans: ["16", "1", "5"],
}, {
  label: { id: 35, grade: 9, chapterTitle: "Tần số và tần số tương đối" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_7/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_7/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_7/ques/3.png`),
  ],
  ans: ["biểu đồ tần số", "72", "cột"],
}, {
  label: {
    id: 36,
    grade: 9,
    chapterTitle: "Xác suất của biến cố trong một số mô hình xác suất đơn giản",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_8/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_8/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_8/ques/3.png`),
  ],
  ans: ["18", "105", "20"],
}, {
  label: {
    id: 37,
    grade: 9,
    chapterTitle: "Đường tròn ngoại tiếp và đường tròn nội tiếp",
  },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_9/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_9/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_9/ques/3.png`),
  ],
  ans: ["d", "1", "120"],
}, {
  label: { id: 38, grade: 9, chapterTitle: "Một số hình khối trong thực tiễn" },
  ques: [
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_10/ques/1.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_10/ques/2.png`),
    require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_10/ques/3.png`),
  ],
  ans: ["nón", "40", "4"],
}];
