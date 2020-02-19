/**
 * APIデータを取得してコンソールに出力します。
 */
export const fetchAPIData = async (): Promise<Response> => {
  let urlEncodedData = "";
  const urlEncodedDataPairs = [];
  const params = {
    user_name: "0949200539",
    user_password: "hbst1234",
    app_id: "x3p)>T<OKZkje\\X\\F']1N9?k-^=XW5so",
    create_session: "ON"
  };
  for (let name in params) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + "=" + encodeURIComponent((params as any)[name])
    );
  }
  urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");
  return fetch("hogehogeapi", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    referrer: "no-referrer",
    body: urlEncodedData
  });
};
