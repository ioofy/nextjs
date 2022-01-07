# Routes Page

Pada rout pages disini basic router yang disediakan adalah

```sh
-- pages
-- -- blog.tsx
```

Pada route pages diatas kita bisa akses pages melalui `{yourweb}/blog` namun, jika anda ingin mengakses lebih detail dari
route pages maka bisa menggunakan

```sh
-- pages
-- -- blog
-- -- -- html-example.tsx
```

Pada route pages diatas kita bisa menyimpulkan bahwa route dari html-example berada di folder blog jika kita ingin akses page tersebut
bisa kita akses melalui `{yourweb/blog/html-example}`, namun jika anda ingin mengakses route blognya saja tanpa ada slug berikutnya bisa
kita tambahkan index.tsx di folder tersebut contoh :

```sh
-- pages
-- -- blog
-- -- -- html-example.tsx
-- -- -- index.tsx
```

Bagaimana membuat halaman dinamic menggunakan nextjs? mari kita implementasikan, pembuatannya sangat simple kita cukup merubah nama file
dengan menambahkan [] pada setiap files page ketika kita memasuki page tersebut akan berubah sesuai dengan nama yang kita cantumkan disini saya
merubah page user-detail menjadi [id].tsx. Kita bisa lihat isi files dari [id].tsx untuk melihat apa yang dinamis

```sh
-- pages
-- -- users
-- -- -- [id].tsx
-- -- -- index.tsx
```
