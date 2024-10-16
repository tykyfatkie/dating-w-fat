import { DatePicker, TimePicker } from "antd";
import { pink } from "../components/interfaces/HeartButton.interface";
import Layout from "../layouts/layout";
import dayjs from "dayjs";
import HeartButton from "../components/HeartButton/HeartButton";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const Question = () => {
  const navigate = useNavigate();
  const [dateTime, setDateTime] = useState<{
    date: dayjs.Dayjs | null;
    time: dayjs.Dayjs | null;
  }>({
    date: null,
    time: null,
  });

  const onChangeDate = (date: dayjs.Dayjs | null) => {
    console.log("Chọn ngày đi chơi:", date);
    setDateTime((prev) => ({ ...prev, date }));
  };

  const onChangeTime = (time: dayjs.Dayjs | null) => {
    console.log("Đặt lịch đi chơi:", time);
    setDateTime((prev) => ({ ...prev, time }));
  };

  const nextQuestion = () => {
    if (dateTime.date && dateTime.time) {
      const combinedDateTime = dayjs(dateTime.date)
        .hour(dateTime.time.hour())
        .minute(dateTime.time.minute());
      const formattedDate = combinedDateTime.format("YYYY-MM-DD");
      const formattedTime = combinedDateTime.format("HH:mm");

      console.log("dateTime:", {
        date: formattedDate,
        time: formattedTime,
      });
      localStorage.setItem(
        "dateTime",
        JSON.stringify({ date: formattedDate, time: formattedTime })
      );
      navigate("/choose");
    } else {
      toast.success("Vui lòng chọn cả ngày và giờ. (╥_╥)", {
        style: {
          border: "1px solid pink",
          padding: "16px",
          color: pink,
        },
        iconTheme: {
          primary: pink,
          secondary: "#FFFAEE",
        },
      });
    }
  };

  return (
    <Layout>
      <main className="d-flex justify-content-center">
        <section>
          <h1 className="text-center" style={{ color: pink }}>
            Bạn muốn đi với Fat lúc nào ?
          </h1>
          <section className="d-flex gap-3 pt-3">
            <DatePicker size="large" onChange={onChangeDate} />
            <TimePicker onChange={onChangeTime} size="large" />
          </section>
          <HeartButton
            style={{
              borderRadius: "1rem",
              transition: "transform 0.5s ease-in-out",
              width: "100%",
              marginTop: "1.3rem",
            }}
            text="(づ￣ ³￣)づ NHẤN ZÔ ĐÂY"
            onClick={nextQuestion}
          />
          <div>
            <Toaster />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Question;
