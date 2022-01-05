# Pada Pages Component disini basic router yang disediakan adalah

-- pages
-- -- blog.tsx

Pada route pages diatas kita bisa akses pages melalui `{yourweb}/blog` namun, jika anda ingin mengakses lebih detail dari
route pages maka bisa menggunakan

-- pages
-- -- blog
-- -- -- html-example.tsx

Pada route pages diatas kita bisa menyimpulkan bahwa route dari html-example berada di folder blog jika kita ingin akses page tersebut
bisa kita akses melalui `{yourweb/blog/html-example}`, namun jika anda ingin mengakses route blognya saja tanpa ada slug berikutnya bisa
kita tambahkan index.tsx di folder tersebut contoh :

-- pages
-- -- blog
-- -- -- html-example.tsx
-- -- -- index.tsx
