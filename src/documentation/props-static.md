# Data fetching getStaticProps

Data Fetching adalah tempat untuk mengambil data diaplikasi nextjs yang kita buat
lalu getStaticProps adalah tempat untuk menyimpan data api yang kita fetching lalu data
tersebut akan dideliver langsung kedalam browser aplikasi yang kita buat.
Jika kamu memiliki function ini di sebuah halaman website berbasis Next,
Next akan melakukan pre-render terhadap halaman website tersebut dengan props yang berasal dari hasil return function ini.

contohnya:

```ts
export async function getStaticProps(context) {
 return {
  props: {}, // will be passed to the page component as props
 };
}
```

Fungsi ini menerima satu parameter yang berupa sebuah objek. Objek tersebut bisa terdiri dari beberapa key berikut:
params: Berisi params dari halaman website ini, dan penulisannya berupa objek juga. Misalnya {id: …, category: …}.
Params sebuah halaman website biasanya yang menjadi penanda bahwa route halaman tersebut dinamis.
preview: Jika halaman ini berada dalam preview mode, maka nilainya adalah “true”, jika tidak maka nilainya adalah “undefined”.
previewData: Berisi data dari fungsi setPreviewData. locale, locales, defaultLocale
Function ini harus menghasilkan atau me-return objek dengan tiga key, props (bersifat required) dan revalidate, notFound (bersifat optional).
props: Merupakan sebuah objek yang nantinya akan diterima oleh component.
revalidate: Berisi sebuah satuan waktu. Jika kamu membutuhkan data yang up-to-date, maka gunakan revalidate, agar ketika ada request ke website, maka Next akan memperbarui data melalui fitur ini.
notFound: Berisi nilai boolean.

## Data fetching getStaticPaths

## Data fetching getServerSideProps
