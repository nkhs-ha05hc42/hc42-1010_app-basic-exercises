import { q9_7model } from "./model.mjs";

const getAllExams = async (req, res) => {
  try {
    const exams = await q9_7model.getAllExams();
    res.json({ status: "success", list: exams });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

const  getOneExams = async (req, res) => {
    const { id } = req.params;  // ← ここで取得します！
  
    try {
      const exams = await q9_7model.getOneExams(id);
  
      if (!exams) {
        return res.status(404).json({ status: "not found" });
      }
  
      res.json({ status: "success", data: exams });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

   const postExams = async (req, res) => {
    const { user_id, year, month, day, name, score } = req.body;
  
    // 入力バリデーション
    if (!user_id || !year || !month || !day || !name || score === undefined) {
      return res.status(400).json({ status: "error", message: "全ての項目が必要です。" });
    }
  
    try {
      const newExam = await examsModel.insertExam(user_id, year, month, day, name, score);
      res.status(201).json({ status: "success", data: newExam });
    } catch (error) {
      console.error("DBエラー:", error);
      res.status(500).json({ status: "error", message: "データベースエラーが発生しました。" });
    }
  }
  const updateExams = async (req, res) => {
    const { id } = req.params;  // URLからIDを取得
    const { user_id, year, month, day, name, score } = req.body;  // リクエストボディからデータ取得
  
    // バリデーション（全ての項目が必須）
    if (!user_id || !year || !month || !day || !name || score === undefined) {
      return res.status(400).json({ status: "error", message: "全ての項目が必要です。" });
    }
  
    try {
      const updatedExam = await examsModel.updateExam(id, user_id, year, month, day, name, score);
  
      if (!updatedExam) {
        return res.status(404).json({ status: "not found", message: "指定したIDのデータが存在しません。" });
      }
  
      res.json({ status: "success", data: updatedExam });
    } catch (error) {
      console.error("DBエラー:", error);
      res.status(500).json({ status: "error", message: "データベースエラーが発生しました。" });
    }
  }
  
  const deleteExams = async (req, res) => {
    const { id } = req.params; // URLからIDを取得
  
    try {
      const deletedExam = await examsModel.deleteExams(id);
  
      if (!deletedExam) {
        return res.status(404).json({ status: "not found", message: "指定したIDのデータが存在しません。" });
      }
  
      res.json({ status: "success", data: deletedExam });
    } catch (error) {
      console.error("DBエラー:", error);
      res.status(500).json({ status: "error", message: "データベースエラーが発生しました。" });
    }
  }  

export const q9_7Controller = {
  getAllExams,
  getOneExams,
  postExams,
  updateExams,
  deleteExams,
}