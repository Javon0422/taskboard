'use client';

// 引入必要的模組
// 從 components 資料夾引入 TaskList 元件
import TaskList from "@/components/TaskList";
// 引入 Next.js 的 Image 元件，用於優化圖片載入
import Image from "next/image";
// 從 React 引入 useState hook，用於管理狀態
import { useState } from "react";

// 定義首頁元件
export default function Home() {
  // 定義狀態變數
  // tasks: 儲存所有待辦事項的陣列
  // setTasks: 用於更新 tasks 的函數
  const [tasks, setTasks] = useState([]);
  
  // newTask: 儲存使用者輸入的新待辦事項
  // setNewTask: 用於更新 newTask 的函數
  const [newTask, setNewTask] = useState('');

  // 新增待辦事項的函數
  const addTask = () => {
    // 在新增前，先在控制台記錄目前的待辦事項
    console.log("Before", tasks);
    // 使用展開運算符 (...) 建立新陣列，並加入新的待辦事項
    const updatedTasks = [...tasks, newTask];
    // 更新 tasks 狀態
    setTasks(updatedTasks);
    // 在新增後，記錄更新後的待辦事項
    console.log("After", updatedTasks);
  };

  // 渲染使用者介面
  return (
    // main 元素包含整個應用程式的主要內容
    // p-4: Tailwind CSS 類別，設定內邊距為 4 單位
    <main className="p-4">
      {/* 標題區塊 */}
      {/* text-2xl: 文字大小, font-bold: 粗體, mb-4: 下方邊距 */}
      <h1 className="text-2xl font-bold mb-4">Task Board</h1>
      
      {/* 輸入區塊 */}
      {/* flex: 彈性佈局, gap-2: 元素間距, mb-4: 下方邊距 */}
      <div className="flex gap-2 mb-4">
        {/* 輸入框 */}
        {/* border: 邊框, p-2: 內邊距, flex-1: 佔用剩餘空間 */}
        <input
          className="border p-2 flex-1"
          placeholder="Enter a task"
          value={newTask}
          // 當輸入值改變時，更新 newTask 狀態
          onChange={(e) => setNewTask(e.target.value)}
        />
        
        {/* 新增按鈕 */}
        {/* bg-blue-500: 藍色背景, text-white: 白色文字, px-4: 左右內邊距 */}
        <button
          className="bg-blue-500 text-white px-4"
          onClick={addTask}
        >
        Add
        </button>
      </div>
      
      {/* 待辦事項列表 */}
      {/* 將 tasks 陣列傳遞給 TaskList 元件進行渲染 */}
      <TaskList tasks={tasks} />
    </main>    
  );
}
