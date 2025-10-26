import { useEffect, useState } from "react";

//star
//id, size, x, y, opacity, animationDuration

//meteor
//id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  //const 2 array luu trang thai cua  star va meteor
  //trong 2 array do thi gan useState va truyen 1  empty array(array rong)
  //ban dau chua co 1 star va meteor nao trong array nen la 1 array rong,
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  //useEffect(() => {}, []) hook chay sau khi React render phan UI
  //Empty Array [] nghia la effefct nay chi chay 1 lan khi component mount
  useEffect(() => {
    //goi 2 ham de khoi tao state stars meteors khi component mount
    //Sau khi dc state stars/meteors dc set thi React re-render de hien thi
    generateStars();
    generateMeteors();

    // const handleResize = () => {
    //   generateStars();
    // };

    // window.addEventListener("resize", handleResize);

    // return () => window.removeEventListener("resize", handleResize);
    //doan nay mang y nghia: khi thay doi kich thuoc man hinh, khung hinh giao dien cung thay doi
    //giup cac stars va meteors cung se duoc thay doi
    //neu khong thi cac the man hinh se khong hien thi duoc stars va meteors khi vao cho trong
    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //function tao stars

  const generateStars = () => {
    // khoi ta 1 bien numberOfStars
    //Muc dich cua bien nay la de tinh toan so luong sao tren dien tich hien thi
    //giup phan bo cac so hop ly trong toan man hinh
    //tang trai nghiem hinh anh cho user
    //Math.floor() muc dich lam tron xuong so bat ky thanh so nguyen gan nhat nho hon hoac bang so do
    //muc dich su dung Math.floor(). Ngan loi, tranh ve sao thanh cac co thap phan, giu so luong sao hop ly
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    //khoi tao 1 array newStars rong
    const newStars = [];

    //dung vong lap for de tao sao
    //muc dich lap du so luong sao can tao (0 -> numberOfStars - 1)
    //Moi lan lap thi se tao 1 star moi
    for (let i = 0; i < numberOfStars; i++) {
      //method push su dung khi tao dc 1 star moi thi se duoc them vao cuoi array newStars o tren
      newStars.push({
        id: i, // id duoc su dung bang cac index de tranh viec lap cac id voi nhau
        //trong doan nay su dung Math.random(). khoang cua math.random() 0 <= Math.random() <= 1. Muc dich su dung giup
        // cac ngoi sao se la doc nhat
        size: Math.random() * 3 + 1, //Kich thuoc cua star voi cong thuc Math.random() *(max-min) + min
        x: Math.random() * 100, // vi tri ngang: 0% -> 100% man hinh
        y: Math.random() * 100, // vi tri doc: 0% -> 100% man hinh
        opacity: Math.random() * 0.5 + 0.5, //do mo (0.5 -> 1)
        animationDuration: Math.random() * 4 + 2, //thoi gian hieu ung: 2s - 6s
      });
    }

    //Chp phep cap nhat state de React ve lai danh sach stars
    //Khi setStars duoc goi: React chap nhat UI -> hien thi toan bo stars, Tu dong re-render ve lai toan man hinh new stars
    setStars(newStars);
  };

  //function tao meteors
  //giai thich cung giong tren
  const generateMeteors = () => {
    const numberOfMeteors = 11;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };
  return (
    // doan tailwindcss: fixed: co dinh man hinh du cuon, inset-0: bao phu toan bo viewport (top=0, left=0, bottom=0, rigth=0)
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/**Doan nay dung de dua stars hient thi tren trinh duyet */}
      {stars.map((star) => (
        //su dung map de duyet mang stars ma ve tung ngoi sao
        <div
          key={star.id} //id star
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",//kich thuc star
            height: star.size + "px",//kich thuc star
            left: star.x + "%", //vi tri ngang cua star tren man hinh
            top: star.y + "%", //vi tri doc cua star tren man hinh
            opacity: star.opacity, //do trong suot cua star
            animationDuration: star.animationDuration + "s", //thoi gian hieu ung
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay, //thoi gian tre cua cac meteor -giup cac meteor khong roi cung luc
            animationDuration: meteor.animationDuration + "s", //quy dinh toc do roi cua meteor
          }}
        />
      ))}
    </div>
  );
};
