des = open("./factoryData.tsx", "w")

def genDef() -> None:
    des.write(
        """import * as FORMATDATA from "./interfaceFormat.tsx";

export const CARD_STATUS_TYPE_CODE: FORMATDATA.CardStatusTypeCodeFormat[] = [
    {
        code: 0,
        name: [
            { lang: 'vi-VN', value: "Mới" },
            { lang: "en-US", value: "New" },
        ],
    },
    {
        code: 1,
        name: [
            { lang: 'vi-VN', value: "Chưa hoàn thành" },
            { lang: "en-US", value: "In progress" },
        ],
    },
    {
        code: 2,
        name: [
            { lang: 'vi-VN', value: "Đã Hoàn thành" },
            { lang: "en-US", value: "Done" },
        ],
    },
]

export const CARD_CATE_TYPE_CODE: FORMATDATA.CardCateTypeCodeFormat[] = [
    {
        code: 0,
        name: [
            { lang: 'vi-VN', value: "Đại số" },
            { lang: "en-US", value: "Algebra" },
        ],
    },
    {
        code: 1,
        name: [
            { lang: 'vi-VN', value: "Hình học" },
            { lang: "en-US", value: "Geometry" },
        ]
    },
    {
        code: 2,
        name: [
            { lang: 'vi-VN', value: "Lý thuyết" },
            { lang: "en-US", value: "Theory" },
        ]
    },
    {
        code: 3,
        name: [
            { lang: 'vi-VN', value: "Công thức" },
            { lang: "en-US", value: "Equation" },
        ]
    }
]
        """
    )

# Todo: missing chapter 9 in class 6
N_CHAPTER = [8, 10, 10, 10]
CHAPTER_TITLE = [
    [
        "Tập hợp các số tự nhiên",
        "Tính chia hết trong tập hợp các số tự nhiên",
        "Số nguyên",
        "Một số hình phẳng trong thực tiễn",
        "Tính đối xứng của hình phẳng trong tự nhiên",
        "Phân số",
        "Số thập phân",
        "Những hình học cơ bản",
        "Dữ liệu và xác suất thực nghiệm"
    ],
    [
        "Số hữu tỉ",
        "Số thực",
        "Góc và đường thẳng song song",
        "Tam giác bằng nhau",
        "Thu thập và biểu diễn dữ liệu",
        "Tỉ lệ thức và đại lượng tỉ lệ",
        "Biểu thức đại số và đa thức một biến",
        "Làm quen với biến cố và xác suất của biến cố",
        "Quan hệ giữa các yếu tố trong một tam giác",
        "Một số hình khối trong thực tiễn"
    ],
    [
        "Đa thức",
        "Hằng đẳng thức đáng nhớ và ứng dụng",
        "Tứ giác",
        "Định lí Thalès",
        "Dữ liệu và biểu đồ",
        "Phân thức đại số",
        "Phương trình bậc nhất và hàm số bậc nhất",
        "Mở đầu về tính xác suất của biến cố",
        "Tam giác đồng dạng",
        "Một số hình khối trong thực tiễn"
    ],
    [
        "Phương trình và hệ hai phương trình bậc nhất hai ẩn",
        "Phương trình và bất phương trình bậc nhất một ẩn",
        "Căn bậc hai và căn bậc ba",
        "Hệ thức lượng trong tam giác vuông",
        "Đường tròn",
        "Hàm số y = ax^2 (a ≠ 0). Phương trình bậc hai một ẩn",
        "Tần số và tần số tương đối",
        "Xác suất của biến cố trong một số mô hình xác suất đơn giản",
        "Đường tròn ngoại tiếp và đường tròn nội tiếp",
        "Một số hình khối trong thực tiễn"
    ]
]

def genLabel(id: int, grade: int, chapterTitle: str) -> None:
    des.write("label: {")
    
    des.write(f"id: {id},")
    des.write(f"grade: {grade},")
    des.write(f"chapterTitle: '{chapterTitle}',")

    des.write("},")


def readFile(location: str) -> str:
    res = ""
    # print(location)
    file = open(location, 'r')

    for line in file:
        res += f"'{line.strip()}',"

    return res


def genMultipleChoiceData(data_type: str, class_id: int, chapter_id: int) -> None:
    des.write("ques: [")
    for i in range(1, 4):
        des.write(f"require(`../assets/photos/{data_type}/Lop_{class_id + 6}/Chuong_{chapter_id + 1}/ques/{i}.png`),")
    des.write("],")

    for ans in ['A', 'B', 'C', 'D']:
        des.write(f"ans{ans}: [")
        for i in range(1, 4):
            des.write(f"require(`../assets/photos/{data_type}/Lop_{class_id + 6}/Chuong_{chapter_id + 1}/ans{ans}/{i}.png`),")
        des.write("],")

    des.write("rightAns: [")
    des.write(readFile(f"../assets/photos/{data_type}/Lop_{class_id + 6}/Chuong_{chapter_id + 1}/rightAns.txt"))
    des.write("],")


def genQuizDataList() -> None:
    id = 0

    des.write("export const chapterTitleList: FORMATDATA.ChapterTitleFormat[] = [")

    for class_id in range(4):
        for chapter_id in range(N_CHAPTER[class_id]):
            des.write("{")

            id += 1
            genLabel(id, class_id + 6, CHAPTER_TITLE[class_id][chapter_id])

            des.write("data: {")
            genMultipleChoiceData("Multiple_Choice", class_id, chapter_id)
            des.write("},")

            des.write("},")

    des.write("];\n")
    return


def genFillInTheBlankData(data_type: str, class_id: int, chapter_id: int) -> None:
    des.write("ques: [")
    for i in range(1, 4):
        des.write(f"require(`../assets/photos/{data_type}/Lop_{class_id + 6}/Chuong_{chapter_id + 1}/ques/{i}.png`),")
    des.write("],")

    des.write("ans: [")
    des.write(readFile(f"../assets/photos/{data_type}/Lop_{class_id + 6}/Chuong_{chapter_id + 1}/ans.txt"))
    des.write("],")


def genFillInTheBlankList() -> None:
    id = 0
    des.write("export const fillInTheBlankList: FORMATDATA.FillInTheBlankFormat[] = [")

    for class_id in range(4):
        for chapter_id in range(N_CHAPTER[class_id]):
            des.write("{")

            id += 1
            genLabel(id, class_id + 6, CHAPTER_TITLE[class_id][chapter_id])
            genFillInTheBlankData("Fill_in_the_blank", class_id, chapter_id)
            des.write("},")

    des.write("];\n")
    return


def genFlashCardList() -> None:
    return


genDef()
genQuizDataList()
genFillInTheBlankList()

# deno fmt factoryData.tsx
