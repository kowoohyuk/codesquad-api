import mongoose from "mongoose";
/*
  @${author}
  ${title}
  을(를) ${columns[0]}에서 ${columns[1]}로 
  ${action}
  하였습니다.
  ${createdAt} 전

  or

  @${author}
  ${text}
  ${createdAt} 전
*/
export const historySchema = mongoose.model(
  "history",
  new mongoose.Schema(
    {
      author: String,
      title: String,
      action: String,
      content: String,
    },
    {
      timestamps: {
        createdAt: "created_at",
      },
    }
  )
);
