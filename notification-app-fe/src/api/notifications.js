export async function fetchNotifications(
  token,
  page = 1,
  limit = 10,
  notificationType = ""
) {
  let url =
    `http://4.224.186.213/evaluation-service/notifications?page=${page}&limit=${limit}`;

  if (notificationType && notificationType !== "All") {
    url += `&notification_type=${notificationType}`;
  }



  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });



  return await response.json();
}