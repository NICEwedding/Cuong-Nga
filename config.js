/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: " Mạnh Cường  ",
  brideName: "Ngọc Ngà ",

  weddingDate: "12/20/2025  16:30:00",
  location: "Xóm 5, Xuân Vinh, Xuân Trường, Nam Định  ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/x44UiEfQMKPjfBjQ9",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5252.177827276123!2d106.35337827646403!3d20.30807218116703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313607f9866e2bc9%3A0x367ee27818fecb34!2zWMOzbSA1LCBYdcOibiBC4bqvYywgWHXDom4gVHLGsOG7nW5nLCBOYW0gxJDhu4tuaCwgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1765655031650!5m2!1svi!2s",
  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/46pqtTe4l6U",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Mạnh Cường ",
      parents: "Bố: Vũ Đăng Luân<br>Mẹ: Đặng Thị Mười",
      address: "Địa chỉ: Minh Thành, Tân Học, Thái Thụy, Thái Bình	"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Ngọc Ngà",
      parents: "Bố: Cao Xuân Thành<br>Mẹ: Nguyễn Thị Vải",
      address: "Địa chỉ: Xóm 5, Xuân Vinh, Xuân Trường, Nam Định "
    }
  },
};
