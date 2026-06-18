import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzYTUyNDQyQHNydS5lZHUuaW4iLCJleHAiOjE3ODE3NjkzNTEsImlhdCI6MTc4MTc2ODQ1MSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImFlZDhiYTJiLWQ3ODctNDY1Ni1hN2FmLTNjMzJiNzYyMTQ5YyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im15YWthIGFraGlsYSIsInN1YiI6ImI4NTU2YTYwLWNjZWQtNDNiMC04Y2E2LTIxZWViOGFmMDVkOCJ9LCJlbWFpbCI6IjIzMDNhNTI0NDJAc3J1LmVkdS5pbiIsIm5hbWUiOiJteWFrYSBha2hpbGEiLCJyb2xsTm8iOiIyMzAzYTUyNDQyIiwiYWNjZXNzQ29kZSI6ImJEcmVBcSIsImNsaWVudElEIjoiYjg1NTZhNjAtY2NlZC00M2IwLThjYTYtMjFlZWI4YWYwNWQ4IiwiY2xpZW50U2VjcmV0IjoielZDcW54cWt6UURrZHhTViJ9.IRCtQv6FaGOFBUkFj0BsuDPzVTcWewOWrwvc8hzTv-Y";
export function useNotifications(page = 1, filter = "All") {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data = await fetchNotifications(
          TOKEN,
          page,
          10,
          filter === "All" ? "" : filter
        );

        console.log(data);

        setNotifications(data.notifications || []);
        setTotalPages(1);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, filter]);

  return {
    notifications,
    totalPages,
    loading,
    error,
  };
}