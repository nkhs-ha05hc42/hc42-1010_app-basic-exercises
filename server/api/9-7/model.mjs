import { query } from "../../db/manager.mjs";

const getAllExams = async () => {
  const result = await query("SELECT * FROM exams;");
  return result.rows;
}

const getOneExams = async (id) => {
  const sql = "SELECT * FROM exams WHERE id = $1;";
  const result = await query(sql, [id]);

  return result.rows[0];  // 単一レコードを返す
}

const insertExams = async (user_id, year, month, day, name, score) => {
  const sql = `
    INSERT INTO exams (user_id, year, month, day, name, score)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [user_id, year, month, day, name, score];
  const result = await query(sql, values);
  return result.rows[0];
}

const updateExams = async (id, user_id, year, month, day, name, score) => {
  const sql = `
    UPDATE exams
    SET user_id = $2, year = $3, month = $4, day = $5, name = $6, score = $7
    WHERE id = $1
    RETURNING *;
  `;
  const values = [id, user_id, year, month, day, name, score];
  const result = await query(sql, values);
  return result.rows[0]; // 更新されたデータを返す
}

const deleteExams = async (id) => {
  const sql = `
    DELETE FROM exams
    WHERE id = $1
    RETURNING *;
  `;
  const result = await query(sql, [id]);
  return result.rows[0]; // 削除したデータを返す
}

export const q9_7model = {
  getAllExams,
  getOneExams,
  insertExams,
  updateExams,
  deleteExams,
}