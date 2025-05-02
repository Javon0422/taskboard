// 定義 TaskList 元件，接收 tasks 陣列作為屬性
export default function TaskList({ tasks }) {
    // 渲染任務列表
    return (
        // ul 元素用於顯示任務清單
        // space-y-2: Tailwind CSS 類別，設定列表項目之間的垂直間距為 2 單位
        <ul className="space-y-2">
            {/* 使用 map 方法遍歷 tasks 陣列，為每個任務建立一個列表項目 */}
            {tasks.map((task, index) => (
                // li 元素代表單個任務項目
                // key: React 需要的唯一識別碼，這裡使用索引（在實際應用中最好使用唯一 ID）
                // border: 添加邊框
                // p-2: 內邊距 2 單位
                // rounded: 圓角邊框
                <li
                  key={index}
                  className="border p-2 rounded"
                >
                  {/* 顯示任務內容 */}
                  {task}
                </li>
            ))}
        </ul>
    )
}
