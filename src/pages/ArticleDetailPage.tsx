import { Container, Grid, Link, Box } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import Header from "../Components/Header";

const ArticleDetailPage = () => {
    const dummyArticles = [
        {
            id: "ASDDGSDGIDSGJNSGN",
            title: "Cegah Stunting dengan Perbaikan Pola Makan, Pola Asuh dan Sanitasi",
            image: "https://dinkes.pekalongankota.go.id/upload/halaman/halaman_20190328114513.png",
            content:`  Sebagian besar masyarakat mungkin belum memahami istilah yang disebut stunting. Stunting adalah masalah kurang gizi kronis yang disebabkan oleh kurangnya asupan gizi dalam waktu yang cukup lama, sehingga mengakibatkan gangguan pertumbuhan pada anak yakni tinggi badan anak lebih rendah atau pendek (kerdil) dari standar usianya. Kondisi tubuh anak yang pendek seringkali dikatakan sebagai faktor keturunan (genetik) dari kedua orang tuanya, sehingga masyarakat banyak yang hanya menerima tanpa berbuat apa-apa untuk mencegahnya. Padahal seperti kita ketahui, genetika merupakan faktor determinan kesehatan yang paling kecil pengaruhnya bila dibandingkan dengan faktor perilaku, lingkungan (sosial, ekonomi, budaya, politik), dan pelayanan kesehatan. Dengan kata lain, stunting merupakan masalah yang sebenarnya bisa dicegah.
            
    Salah satu fokus pemerintah saat ini adalah pencegahan stunting. Upaya ini bertujuanagar anak-anak Indonesia dapat tumbuh dan berkembang secara optimal dan maksimal, dengan disertai kemampuan emosional, sosial, dan fisik yang siap untuk belajar, serta mampu berinovasi dan berkompetisi di tingkat global. “Terdapat tiga hal yang harus diperhatikan dalam pencegahan stunting, yaitu perbaikan terhadap pola makan, pola asuh, serta perbaikan sanitasi dan akses air bersih”, tutur Menteri Kesehatan RI, Nila Farid Moeloek, di Jakarta (7/4).

1. Pola Makan
    Masalah stunting dipengaruhi oleh rendahnya akses terhadap makanan dari segi jumlah dan kualitas 
    gizi, serta seringkali tidak beragam.Istilah “Isi Piringku” dengan gizi seimbang perlu diperkenalkan dan 
   dibiasakan dalam kehidupan sehari-hari. Bagi anak-anak dalam masa pertumbuhan,  memperbanyak 
   sumber protein sangat dianjurkan, di samping tetap membiasakan mengonsumsi buah dan sayur.

    Dalam satu porsi makan, setengah piring diisi oleh sayur dan buah, setengahnya lagi 
    diisi dengan sumber protein (baik nabati maupun hewani) dengan proporsi lebih 
    banyak daripada karbohidrat.

2. Pola Asuh
    Stunting juga dipengaruhi aspek perilaku, terutama pada pola asuh yang kurang baik dalam praktek 
   pemberian makan bagi bayi dan Balita. Dimulai dari edukasi tentang kesehatab reproduksi dan gizi 
   bagi remaja sebagai cikal bakal keluarga, hingga para calon ibu memahami pentingnya memenuhi 
   kebutuhan gizi saat hamil dan stimulasi bagi janin, serta memeriksakan kandungan empat kali selama 
   kehamilan.

3. Sanitasi dan Akses Air Bersih 
    Rendahnya akses terhadap pelayanan kesehatan, termasuk di dalamnya adalah akses sanitasi dan 
    air bersih, mendekatkan anak pada risiko ancaman penyakit infeksi. Untuk itu, perlu membiasakan 
    cuci tangan pakai sabun dan air mengalir, serta tidak buang air besar sembarangan.

    Sumber: Kementrian Kesehatan Republik Indonesia
            `,
            sumber:"http://p2ptm.kemkes.go.id/kegiatan-p2ptm/subdit-penyakit-diabetes-melitus-dan-gangguan-metabolik/cegah-stunting-dengan-perbaikan-pola-makan-pola-asuh-dan-sanitasi"
        },
        {
            id: "KJLANSJKLNJKL",
            title: "Berkenalan dengan Stunting: Penyebab, Dampak, dan Pencegahannya",
            image: "https://static.republika.co.id/uploads/images/inpicture_slide/ilustrasi_200928222258-299.jpg",
            content:`
     Proses tumbuh kembang anak tak hanya berlangsung pesat ketika anak memasuki usia balita.  Seribu hari pertama kehidupan anak justru menjadi momen penting yang memengaruhi tumbuh kembangnya di masa anak-anak hingga beranjak dewasa. Hingga kini, masalah anak stunting masih menjadi momok menakutkan yang menghantui anak-anak di berbagai belahan dunia, termasuk Indonesia.

     Sayangnya, pengetahuan masyarakat tentang risiko stunting pada anak terbilang masih sangat minim. Masyarakat harus lebih proaktif mengakses berbagai informasi demi mencegah risiko stunting pada si kecil. Kalau Anda termasuk orang yang belum mengetahui banyak hal seputar stunting, ulasan informasi lengkap berikut ini akan membantu Anda memahaminya

Apa yang Dimaksud dengan Stunting?

    Stunting dapat didefinisikan sebagai gangguan tumbuh kembang anak yang disebabkan masalah gizi kronis sejak anak masih berada dalam kandungan. Umumnya, gejala stunting baru terlihat saat anak berusia 2 tahun. Stunting merupakan parameter pertumbuhan anak berdasarkan tinggi badan. Wasting adalah parameter pertumbuhan anak berdasarkan berat badan.

Beragam Penyebab Stunting
Ada berbagai faktor yang dapat menyebabkan stunting, yaitu:

    Kekurangan asupan nutrisi selama proses kehamilan hingga anak lahir. Penyebab anak stunting yang satu ini bisa terjadi karena kondisi finansial keluarga yang buruk atau akses sumber makanan bergizi yang sulit (biasanya penyebab ini sering terjadi pada masyarakat yang tinggal di tempat terpencil).
Kondisi sanitasi tempat tinggal yang buruk sehingga ibu hamil atau menyusui kesulitan mendapatkan air bersih untuk minum atau kebutuhan mandi-cuci-kakus (MCK).Keterbatasan fasilitas kesehatan untuk mendukung kebutuhan ibu hamil, bayi, dan ibu menyusui. Anak-anak terserang infeksi sejak di dalam kandungan atau ketika baru lahir sehingga pertumbuhan tinggi badannya terhambat.
           
Perubahan hormon pada ibu hamil atau bayi yang berimbas pada laju pertumbuhan.Ikatan emosional antara orang tua dan anak kurang kuat. Ini kerap menjadikan orang tua cenderung kurang peduli terhadap kebutuhan gizi anak sejak masih dalam kandungan maupun setelah lahir. Penyebab ini biasanya terjadi pada korban perundungan seksual atau kehamilan yang tidak direncanakan.
           
Mengenali Ciri-Ciri Anak Stunting
Anak yang mengalami stunting biasanya memperlihatkan beberapa ciri berikut ini:

1. Tinggi badan anak tergolong pendek jika dibandingkan dengan rata-rata tinggi badan anak seusianya.
2. Meskipun proporsi tubuh tampak normal (tidak terlalu gemuk atau tidak terlalu kurus), penampilan 
    anak terlihat lebih muda daripada usia sebenarnya.
3. Pertumbuhan gigi tergolong lambat.
4. Persebaran lemak pada tubuh tidak merata sehingga ada bagian tubuh yang tampak lebih berlemak, 
    misalnya pipi chubby.
5. Saat memasuki usia sekolah, anak akan kesulitan berkonsentrasi ketika belajar atau melakukan 
    aktivitas lainnya.
6. Anak stunting yang sudah memasuki usia sekolah juga memiliki keterbatasan daya ingat.
7. Masa pubertas juga berlangsung terlambat.

Dampak Stunting pada Anak
Stunting adalah masalah kesehatan serius yang tak boleh dianggap remeh. Ada berbagai dampak stunting yang bisa berakibat buruk pada anak di masa kini maupun masa mendatang. Dampak buruk tersebut antara lain:

   Kondisi kognitif anak menjadi lemah dan psikomotoriknya terhambat. Dampak stunting ini akan membuat anak kesulitan mencerna pelajaran dan susah mengembangkan kreativitas. Anak-anak yang mengalami stunting akan memiliki tingkat intelektual lebih rendah dibandingkan anak-anak yang bertumbuh maksimal. Akibatnya, anak-anak yang stunting akan mengalami hambatan prestasi akademis. Selain itu, proporsi fisik yang kurang memadai juga membuat anak-anak sulit mencapai prestasi di bidang olahraga.

   Di masa depan, anak-anak stunting lebih mudah mengalami penyakit degeneratif (penyakit yang muncul karena pertambahan usia). Sebuah studi kesehatan menyatakan anak-anak yang mengalami stunting lebih rentan mengidap diabetes melitus dan obesitas ketika dewasa. Keseimbangan kadar gula darah rentan terganggu dan jaringan lemak pada tubuh lebih mudah terbentuk.

   Dampak buruk stunting pada anak juga turut berimbas pada perkembangan negara. Anak-anak stunting akan tumbuh menjadi sumber daya manusia (SDM) yang kualitasnya rendah. Daya saing SDM Tanah Air terhadap SDM luar negeri pun akan semakin rendah. Padahal, kemajuan suatu negara sangat dipengaruhi kualitas SDM-nya.

Kondisi Stunting di Indonesia

   Berdasarkan data World Health Organization (WHO) 2017, Indonesia menempati urutan kelima untuk kategori negara yang memiliki jumlah kasus stunting terbanyak di dunia dengan persentase mencapai 37%. Berdasarkan data tersebut, kawasan Ogan Komering Ilir, Lampung, merupakan salah satu daerah dengan kasus stunting terbanyak di Tanah Air dengan persentase 40,5%, jauh di atas rata-rata angka stunting nasional.

   Menteri Kesehatan Republik Indonesia (Menkes RI) periode 2014-2019, Nila Moeloek menyatakan, angka stunting anak di Indonesia menunjukkan penurunan pada 2019 dengan persentase 27,67%. Angka tersebut juga menunjukkan penurunan bila dibandingkan data serupa pada 2018 dengan persentase 30,8%. Meskipun mengalami penurunan, persentase tersebut masih jauh dari standar WHO yang berkisar di angka 20%. Artinya, dari setiap lima balita, hanya boleh ada maksimal satu orang yang mengalami stunting.

   Upaya menurunkan jumlah kasus stunting masih menjadi pekerjaan rumah besar bagi Indonesia. Pemberantasan stunting adalah usaha berkesinambungan untuk meningkatkan kualitas SDM di masa mendatang. Ini agar Indonesia dapat menghasilkan banyak SDM unggul yang memiliki daya saing hingga ke tingkat internasional. Pencegahan stunting tak hanya menjadi tanggung jawab individu atau calon orang tua, melainkan menjadi tanggung jawab seluruh lapisan masyarakat, termasuk pemerintah sebagai fasilitator.
            `,
        },
        {
            id: "AWIEJFOWIAGOAWNVOAW",
            title: "Kebutuhan Nutrisi Gizi Ibu Hamil Yang Harus Dipenuhi",
            image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1626582186/attached_image/inilah-alasan-mengapa-ibu-hamil-mengalami-ngidam.jpg",
            content:`
    Asupan gizi ibu hamil menjadi faktor penting baik untuk pemenuhan nutrisi ibu hamil atau pun untuk pertumbuhan dan perkembangan janin dalam kandungan. Bahkan, dapat mengurangi risiko penyakit kronis pada anak Anda di masa mendatang. Yuk, simak daftar asupan gizi ibu hamil yang harus dipenuhi berikut ini.

    Tubuh Anda akan mengalami banyak perubahan fisik dan hormon di masa kehamilan. Dalam hal ini, asupan gizi ibu hamil akan memengaruhi kesehatan ibu dan janin dalam kandungan. Anda harus memenuhi kebutuhan nutrisi seimbang di masa kehamilan agar bayi terlahir sehat. Nutrisi yang tepat sangat membantu tumbuh kembang buah hati Anda. Kebutuhan nutrisi yang dimaksud bukan dalam hal porsi makan, di mana Anda “makan untuk dua orang". Namun lebih dari itu, Anda memerlukan lebih banyak nutrisi, seperti mikronutrien dan makronutrien, untuk mendukung kesehatan Anda serta janin. Mikronutrien adalah komponen makanan yang meliputi vitamin dan mineral. Sedangkan makronutrien adalah nutrisi yang mengandung kalori atau energi seperti karbohidrat, protein, dan lemak.

    Daftar Kandungan Nutrisi yang Baik untuk Pemenuhan Gizi Ibu Hamil

    Kebutuhan setiap jenis nutrisi di masa kehamilan tentu berbeda dengan kebutuhan nutrisi saat tidak hamil. Pada masa kehamilan, perlu adanya tambahan 300 kalori terutama di trismester kedua dan ketiga. Kebutuhan harian ibu hamil adalah kalsium sebanyak 1000-1200 miligram, folat sebanyak 600-800 mikrogram, dan zat besi sebanyak 27 miligram.

    Berikut daftar kandungan nutrisi yang dibutuhkan di masa kehamilan:

    Protein. Protein berguna untuk membantu pertumbuhan dan perkembangan sel atau jaringan, termasuk sel otak pada janin. Protein juga membantu pertumbuhan jaringan payudara ibu hamil, serta berperan penting dalam meningkatkan suplai darah dalam tubuh. Para ahli merekomendasikan 75 sampai 100 gram protein per hari. Adapun sumber protein terbaik untuk ibu hamil meliputi daging sapi tanpa lemak, ikan, boga bahari, daging ayam, daging domba, tahu, dan kacang-kacangan (kacang merah, kacang polong).

    Karbohidrat. Karbohidrat merupakan sumber kalori yang penting bagi ibu hamil. Makanan sumber karbohidrat terbaik yang bisa Anda konsumsi antara lain nasi, kentang, sereal, pasta, sayuran dan buah.

    Kalsium. Tak hanya menguatkan tulang dan gigi Anda, kalsium juga berguna untuk membangun tulang dan gigi janin. Selain itu, kalsium membantu tubuh mengatur cairan, membantu kerja fungsi saraf dan kontraksi otot. Kebutuhan kalsium harian sekitar 1000 miligram selama kehamilan. Sumber kalsium terbaik ada di susu, keju, yoghurt, ikan sarden atau salmon, dan bayam.

    Folat. Kandungan nutrisi yang dikenal sebagai asam folat ini berperan penting dalam mengurangi risiko cacat lahir, termasuk cacat tabung saraf pada janin yang memengaruhi otak serta sumsum tulang belakang janin. Contoh cacat lahir lainnya seperti spina bifida dan anencephaly. Kebutuhan asam folat harian di masa kehamilan adalah 600 sampai 800 mikrogram. Adapun sumber asam folat bisa Anda dapatkan pada sayuran hijau, kacang-kacangan, telur, hati sapi, buah jeruk, stroberi, lemon, mangga, dan tomat.

    Zat Besi.  Zat besi membantu meningkatkan volume darah dan mencegah anemia. Asupan harian yang ideal di masa kehamilan adalah 27 miligram. Sumber zat besi bisa didapatkan pada lobak, sayuran hijau seperti bayam, selada, kubis, biji-bijian, roti, sereal, dan havermut. Kandungan zat besi pada daging sapi dan boga bahari juga baik untuk gizi ibu hamil.Kebutuhan Vitamin Ibu Hamil yang Harus Dipenuhi

    Asupan vitamin juga menjadi kebutuhan gizi ibu hamil yang harus dipenuhi. Adapun vitamin yang diperlukan di masa kehamilan meliputi:

    1. Vitamin A untuk kesehatan kulit dan mata serta pertumbuhan tulang. Sumber vitamin A antara lain 
    wortel, sayuran hijau, dan umbi-umbian.

    2. Vitamin C untuk kesehatan gigi, gusi, dan tulang, serta membantu penyerapan zat besi. Sumber 
    vitamin C antara lain buah sitrus, brokoli, tomat.

    3. Vitamin B6 untuk pembentukan sel darah merah, untuk efektivitas manfaat protein, lemak, dan 
    karbohidrat. Vitamin B6 bisa didapat dari sereal, biji-bijian utuh seperti gandum, dan buah pisang.

    4. Vitamin B12 untuk pembentukan sel darah merah, menjaga kesehatan sistem saraf. Sumber vitamin
    B12 adalah daging, ikan, dan susu.

    5. Vitamin D untuk kesehatan tulang dan gigi serta membantu penyerapan kalsium. Sumber vitamin D 
    antara lain susu, sereal, dan roti.

    Dokter kandungan Anda akan memberikan vitamin sebelum kehamilan untuk dikonsumsi setiap hari, serta pilihan menu makanan sehat yang harus Anda konsumsi. Jadi, konsultasikan hal ini pada dokter kandungan atau bidan Anda. Terlebih jika Anda seorang vegetarian, mintalah saran terkait menu makanan serta nutrisi untuk memenuhi kebutuhan gizi ibu hamil.

    Tak hanya penambahan menu makanan, kehamilan juga dapat berdampak pada masalah makan. Untuk memenuhi kebutuhan nutrisi ibu hamil, Anda bisa melakukan beberapa langkah sederhana berikut ini:

    1. Makan pagi setiap hari. Jika sulit untuk makan pagi baik karena mual atau morning sickness yang 
    dialami, cobalah makan roti gandum saat bangun tidur. Sertakan pula buah, oatmeal, sereal, serta susu 
    rendah lemak atau yoghurt.Makanlah makanan berserat tinggi dan perbanyaklah asupan cairan, dari 
    air putih atau pun jus buah, serta rajin berolahraga untuk mencegah konstipasi.

    2. Terapkan pola makan sehat dengan menu sereal gandum, sayuran, buah, dan kacang-kacangan.
    Hindari makanan pedas dan berlemak, terlebih jika Anda menderita penyakit maag. Disarankan makan 
    dengan porsi kecil namun sering. Serta hindari berbaring setelah makan.

   3. Hindari mengonsumsi minuman beralkohol, kafein, minuman bersoda, ikan dengan kandungan 
    merkuri tinggi.Jangan ragu mengonsultasikan pemenuhan gizi ibu hamil kepada dokter kandungan 
    untuk mendapatkan sumber vitamin dan mineral yang tepat. Kesehatan ibu hamil juga turut 
    menyokong kesehatan janin yang dikandungnya.
        `,
           
            
        }
    ];

    const { id } = useParams<{ id: string }>();
    const Article= dummyArticles.filter(article =>article.id === id)
    console.log(Article)
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <h1>Artikel</h1>
                <h2>{Article[0].title}</h2>
                <Grid container spacing={10}>
                    <Grid item xs={6} md={8}>
                        <img width={780} alt="article thumbnail" src={Article[0].image} />
                        <p className="content">{Article[0].content}</p>
                    </Grid>
                    <Grid 
                        item 
                        xs={6} 
                        md={4} 
                        alignItems="center"
                    >
                        <h2>Artikel Lain :</h2>
                        { dummyArticles.filter(article => article.id != id).map(article => (
                            <>
                                <img width={332} src={article.image} />
                                <h3>
                                    <Link 
                                        component={RouterLink} 
                                        to={`/article/${article.id}`}
                                        underline="none"
                                        color="black"
                                    >
                                        {article.title}
                                    </Link>
                                </h3>
                            </>
                        )) }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ArticleDetailPage