import { Container, Grid, Link, Box } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import Header from "../Components/Header";

const ArticleDetailPage = () => {
    const dummyArticles = [
        {
            id: "ASDDGSDGIDSGJNSGN",
            title: "Cegah Stunting dengan Perbaikan Pola Makan, Pola Asuh dan Sanitasi",
            desc: "Sebagian besar masyarakat mungkin belum memahami istilah yang disebut stunting. Stunting adalah masalah kurang gizi kronis yang disebabkan oleh kurangnya asupan gizi dalam waktu yang cukup lama, sehingga mengakibatkan gangguan pertumbuhan pada anak yakni tinggi badan anak lebih rendah atau pendek (kerdil) dari standar usianya....",
            image: "https://dinkes.pekalongankota.go.id/upload/halaman/halaman_20190328114513.png"
        },
        {
            id: "KJLANSJKLNJKL",
            title: "Berkenalan dengan Stunting: Penyebab, Dampak, dan Pencegahannya",
            desc: "Proses tumbuh kembang anak tak hanya berlangsung pesat ketika anak memasuki usia balita.  Seribu hari pertama kehidupan anak justru menjadi momen penting yang memengaruhi tumbuh kembangnya di masa anak-anak hingga beranjak dewasa. Hingga kini, masalah anak stunting masih menjadi momok menakutkan yang menghantui anak-anak di berbagai belahan dunia, termasuk Indonesia....",
            image: "https://static.republika.co.id/uploads/images/inpicture_slide/ilustrasi_200928222258-299.jpg"
        },
        {
            id: "AWIEJFOWIAGOAWNVOAW",
            title: "Kebutuhan Nutrisi Gizi Ibu Hamil Yang Harus Dipenuhi",
            desc: "Asupan gizi ibu hamil menjadi faktor penting baik untuk pemenuhan nutrisi ibu hamil atau pun untuk pertumbuhan dan perkembangan janin dalam kandungan. Bahkan, dapat mengurangi risiko penyakit kronis pada anak Anda di masa mendatang. Yuk, simak daftar asupan gizi ibu hamil yang harus dipenuhi berikut ini.",
            image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1626582186/attached_image/inilah-alasan-mengapa-ibu-hamil-mengalami-ngidam.jpg"
        }
    ];

    const { id } = useParams<{ id: string }>();
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <h1>Artikel</h1>
                <h2>Cegah Stunting dengan Perbaikan Pola Makan, Pola Asuh dan Sanitasi</h2>
                <Grid container spacing={10}>
                    <Grid item xs={6} md={8}>
                        <img width={780} alt="article thumbnail" src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1626582186/attached_image/inilah-alasan-mengapa-ibu-hamil-mengalami-ngidam.jpg" />
                        <p>Sebagian besar masyarakat mungkin belum memahami istilah yang disebut stunting. Stunting adalah masalah kurang gizi kronis yang disebabkan oleh kurangnya asupan gizi dalam waktu yang cukup lama, sehingga mengakibatkan gangguan pertumbuhan pada anak yakni tinggi badan anak lebih rendah atau pendek (kerdil) dari standar usianya. </p>
                        <p>Kondisi tubuh anak yang pendek seringkali dikatakan sebagai faktor keturunan (genetik) dari kedua orang tuanya, sehingga masyarakat banyak yang hanya menerima tanpa berbuat apa-apa untuk mencegahnya. Padahal seperti kita ketahui, genetika merupakan faktor determinan kesehatan yang paling kecil pengaruhnya bila dibandingkan dengan faktor perilaku, lingkungan (sosial, ekonomi, budaya, politik), dan pelayanan kesehatan. Dengan kata lain, stunting merupakan masalah yang sebenarnya bisa dicegah.</p>
                        <p>Salah satu fokus pemerintah saat ini adalah pencegahan stunting. Upaya ini bertujuanagar anak-anak Indonesia dapat tumbuh dan berkembang secara optimal dan maksimal, dengan disertai kemampuan emosional, sosial, dan fisik yang siap untuk belajar, serta mampu berinovasi dan berkompetisi di tingkat global.</p>
                        <p>“Terdapat tiga hal yang harus diperhatikan dalam pencegahan stunting, yaitu perbaikan terhadap pola makan, pola asuh, serta perbaikan sanitasi dan akses air bersih”, tutur Menteri Kesehatan RI, Nila Farid Moeloek, di Jakarta (7/4).</p>
                        <ol>
                            <li>
                                <h3>Pola Makan</h3>
                                <p>
                                    Masalah stunting dipengaruhi oleh rendahnya akses terhadap makanan dari segi 
                                    jumlah dan kualitas gizi, serta seringkali tidak beragam.

                                    Istilah “Isi Piringku” dengan gizi seimbang perlu diperkenalkan dan dibiasakan 
                                    dalam kehidupan sehari-hari. Bagi anak-anak dalam masa pertumbuhan,  memperbanyak sumber protein sangat dianjurkan, di samping tetap membiasakan 
                                    mengonsumsi buah dan sayur.

                                    Dalam satu porsi makan, setengah piring diisi oleh sayur dan buah, setengahnya lagi 
                                    diisi dengan sumber protein (baik nabati maupun hewani) dengan proporsi lebih 
                                    banyak daripada karbohidrat.
                                </p>
                            </li>
                            <li>
                                <h3>Pola Asuh</h3>
                                <p>
                                    Stunting juga dipengaruhi aspek perilaku, terutama pada pola asuh yang kurang baik 
                                    dalam praktek pemberian makan bagi bayi dan Balita.

                                    Dimulai dari edukasi tentang kesehatab reproduksi dan gizi bagi remaja sebagai 
                                    cikal bakal keluarga, hingga para calon ibu memahami pentingnya memenuhi 
                                    kebutuhan gizi saat hamil dan stimulasi bagi janin, serta memeriksakan 
                                    kandungan empat kali selama kehamilan.
                                </p>
                            </li>
                            <li>
                                <h3>Sanitasi dan Akses Air Bersih</h3>
                                <p>
                                    Rendahnya akses terhadap pelayanan kesehatan, 
                                    termasuk di dalamnya adalah akses sanitasi dan air bersih, mendekatkan anak pada 
                                    risiko ancaman penyakit infeksi. Untuk itu, perlu membiasakan cuci tangan pakai 
                                    sabun dan air mengalir, serta tidak buang air besar sembarangan.
                                </p>
                            </li>
                        </ol>
                    </Grid>

                    <h2>Sarapan Penuhi 30 Persen Kebutuhan Gizi</h2>
                    <Grid item xs={6} md={8}>
                        <img width={780} alt="article thumbnail" src="s5.jpg" />
                        <p>Menurut Data Survei Status Gizi Balita Indonesia tahun 2021, prevalensi stunting di Indonesia mencapai 24,4 persen. Jumlah tersebut turun sebanyak 3,3 persen dari 27,7 persen di tahun 2019. Momentum ini perlu terus dilanjutkan melalui kolaborasi antar sektor untuk mengurangi risiko kejadian stunting di masa yang akan datang.</p>
                        <p>Sebagai upaya mewujudkannya, Nestlé Indonesia bersama dengan Badan Kependudukan dan Keluarga Berencana Nasional (BKKBN) menggelar webinar bertajuk Edukasi Gizi untuk Keluarga Berkualitas: Pemenuhan Gizi Seimbang Melalui Sarapan untuk Mendukung Kualitas Gizi.</p>
                        <p>Kegiatan tersebut diselenggarakan sebagai upaya percepatan penanggulangan prevalensi stunting di Indonesia. Diikuti oleh 2.500 peserta, webinar turut mengundang para kader dari 292 kelompok kerja Dapur Sehat Atasi Stunting (Dashat) di Kampung KB seluruh Indonesia.</p>
                        <p>Dalam webinar tersebut, Nestlé dan BKKBN secara khusus mendiskusikan tiga hal, di antaranya pengenalan gizi seimbang serta korelasi terhadap stunting, peran sarapan dalam pemenuhan gizi harian, dan cara mengolah makanan dari kebun sendiri serta memanfaatkan keanekaragaman pangan lokal untuk mencapai gizi seimbang.</p>
                        <p>Webinar ini turut mengingatkan pentingnya peran keluarga sebagai kelompok masyarakat terkecil dalam menerapkan kebiasaan makan yang baik. Hal ini amat penting untuk mencegah risiko stunting.</p>
                        <p>Guru Besar Pangan dan Gizi Institut Pertanian Bogor (IPB) Prof. Ali Khomsan dalam webinar mengatakan, pencegahan stunting harus dilakukan sedini mungkin, salah satunya dengan mengonsumsi makanan tambahan bergizi yang cukup.</p>
                        <p>“Melihat pola konsumsi di Indonesia saat ini, masyarakat harus meningkatkan konsumsi protein hewani, kacang-kacangan, umbi-umbian, buah dan sayur, sedangkan yang harus diturunkan adalah konsumsi beras dan terigu. Menanam aneka tanaman seperti umbi misalnya juga memiliki keunggulan dalam budidaya, yakni mudah ditanam dan adaptif pada berbagai lingkungan dan terhadap perubahan iklim. Selain itu, konsumsi jus kacang hijau yang dapat meningkatkan berat badan balita, sedangkan tempe meningkatkan berat badan pada balita umur 12-18 bulan,” imbuhnya.</p>
                        <<p>Dalam webinar ini, terdapat beberapa kesimpulan penting yang diambil oleh para narasumber, yakni:</p>
                        <ul>
                        <li>70 persen kejadian stunting disebabkan oleh pola hidup, seperti konsumsi pangan dan aktivitas fisik. Hal ini tentunya dapat memengaruhi pertumbuhan dan perkembangan anak.</li>
                        <li>Keluarga sebagai kelompok masyarakat yang terkecil perlu menerapkan kebiasaan makan baik. Misalnya saja dengan membuat olahan menu semenarik mungkin dari aneka ragam bahan pangan yang dapat membantu memenuhi gizi seimbang. Dengan menerapkan ini, kualitas dan status gizi keluarga akan mengalami perbaikan dan peningkatan.</li>
                        <li>Sarapan dapat berkontribusi terhadap 30 persen kebutuhan gizi. Oleh karena itu, anak perlu mengonsumsi sarapan bergizi seimbang yang terdiri dari makanan pokok, lauk pauk, serta sayur dan buah.</li>
                        </ul>
                        <p>Presiden Direktur Nestlé Indonesia, Ganesan Ampalavanar menyampaikan bahwa Nestlé Indonesia berkomitmen untuk mendukung keluarga Indonesia untuk menjalani hidup yang lebih sehat dan lebih bahagia.</p>
                        <p>“Salah satu wujud nyata kontribusi kami adalah mendukung peningkatan status gizi keluarga Indonesia melalui program Nestlé Dukung Anak Lebih Sehat, atau yang secara global dikenal sebagai Nestlé for Healthier Kids. Dukungan ini dimulai dengan penandatanganan nota kesepahaman dengan BKKBN pada Desember tahun lalu, dan kegiatan kita hari ini merupakan kelanjutan dari kerja sama tersebut,” paparnya.</p>
                        <<p>Melalui program Nestlé Dukung Anak Lebih Sehat, Nestlé Indonesia mendukung keluarga Indonesia menanamkan kebiasaan baik untuk memiliki pola hidup sehat sejak dini. Nestlé telah melakukan fortifikasi gizi dalam produk makanan dan minumannya.</p>
                        <<p>Pada 2020, Nestlé menyediakan 4 miliar sajian produk yang telah difortifikasi dengan zat-zat gizi penting, seperti zat besi, zink, vitamin A dan vitamin D, guna mengatasi masalah stunting dan memenuhi kebutuhan gizi anak.</p>
                        <<p>“Selaras dengan tujuan Nestlé dalam menggunakan potensi makanan untuk meningkatkan kualitas hidup setiap individu saat ini dan untuk generasi mendatang, Nestlé berharap kegiatan ini dapat membantu meningkatkan kesadaran dan pemahaman masyarakat, terutama di tingkat keluarga, mengenai stunting, terutama upaya pencegahan dan penanggulangannya,” tutup Ganesan.</p>
                        <p> Sumber: Kompas.com</p>
                            <a href="https://www.kompas.com/edu/read/2022/05/30/164144171/cegah-stunting-pada-anak-sarapan-penuhi-30-persen-kebutuhan-gizi">https://www.kompas.com/edu/read/2022/05/30/164144171/cegah-stunting-pada-anak-sarapan-penuhi-30-persen-kebutuhan-gizi</a>

                        </Grid>

                        <h2>6 Provinsi Capai Angka Stunting Lebih 30 Persen Pada 2022</h2>

                    <Grid item xs={6} md={8}>
                        <img width={780} alt="article thumbnail" src="s1.jpg" />
                        <p>Kepala Badan Kependudukan dan Keluarga Berencana Nasional (BKKBN), asto Wardoyo menyebutkan bahwa terdapat enam provinsi yang masih memiliki angka kekerdilan (stunting) mencapai lebih dari 30 persen pada tahun 2022</p>
                        <p>"Amanah dari Bapak Presiden tentu kita lebih banyak fokus memperhatikan keluarga yang muda. Ini menjadi perhatian yang penting, karena keluarga muda yang baru mau produktif ini, jadi penentu masa yang akan datang", kata Hasto dalam Rapat Dengar Pendapat Komisi IX DPR RI dengan BKKBN  yang diikuti secara daring di Jakarta, Senin.</p>
                        <p>Berdasarkan data Studi Status Gizi Indonesia (SSGI) tahun 2021, enam provinsi itu adalah Nusa Tenggara Timur (37,8 persen), Sulawesi Barat (33,8 persen), Aceh (33,2 persen), Nusa Tenggara Barat (31,4 persen) dan Sulawesi Tenggara (30,2 persen) dan Kalimantan Selatan (30 persen).</p>
                        <p>Hasto menuturkan permasalahan gizi pada keenam provinsi itu harus segera mungkin dituntaskan. Sebab stunting menjadi salah satu komponen terbesar dalam meningkatkan kualitas sumber daya manusia, yakni sebesar 24,4 persen.</p>
                        <p>Selain itu, permasalah stunting dalam pembangunan sumber daya manusia nantinya juga sangat berkaitan erat dengan terjadinya mental emotional disorder  pada anak sebesar 9,8 persen, disabilitas atau autisme 4,1 persen.</p>
                        <p>“Kita harus siapkan saat ini, mulai dari sekarang. Supaya betul-betul Indonesia emas bisa diraih,” ujarnya.</p>
                        <p>Guna mengentaskan stunting, pihaknya akan fokus melakukan berbagai penanganan melalui intervensi baik secara sensitif maupun spesifik di enam provinsi yang memiliki prevalensi tertinggi sekaligus lima provinsi dengan jumlah penduduk absolut. Kelima provinsi tambahan itu adalah Jawa Barat, Jawa Timur, Jawa Tengah, Banten dan Sumatera Utara.</p>
                        <p>BKKBN juga akan berpegang teguh pada lima pilar yang ada dalam strategi nasional percepatan penurunan stunting, di mana pilar-pilar itu mengacu mulai dari pembangunan komitmen pemerintah pusat dan daerah, menjalankan komunikasi informasi dan edukasi (KIE) pada masyarakat, berjalannya intervensi sensitif dan spesifik.</p>
                        <p>Termasuk pengolahan bahan pangan lokal melalui Dapur Sehat Atasi Stunting (Dashat) serta menjalankan riset dan inovasi seperti Pendataan Keluarga (PK) 2021 juga menciptakan aplikasi Elsimil (Elektronik Siap Nikah dan Hamil).</p>
                        <p>Sedangkan dalam melakukan pendampingan pada keluarga, BKKBN sudah membentuk tim pendamping keluarga yang terdiri dari 600 ribu personel atau sebanyak 200 ribu tim yang terdiri dari bidan, tim PKK juga kader dan disebar di seluruh penjuru negeri</p>
                        <p>Namun, kata dia, semua hal itu tidak dapat berjalan dengan baik tanpa adanya komitmen kuat dan kolaborasi bersama semua pihak.</p>
                        <p>Oleh sebab itu, berbagai kerja sama dengan kementerian dijalin guna mempercepat penurunan angka stunting.</p>
                        <p>“Peran BKKBN memfokuskan pada keluarga, bagaimana unit terkecil dalam masyarakat keluarga ini bisa dipastikan menerima bantuan-bantuan yang bersumber dari kementerian dan lembaga sampai pada sasaran,” tegas Hasto. </p>
                        <p> Sumber: antaranews.com</p>
                            <a href="https://www.antaranews.com/berita/2676681/enam-provinsi-capai-angka-stunting-lebih-30-persen-pada-2022">https://www.antaranews.com/berita/2676681/enam-provinsi-capai-angka-stunting-lebih-30-persen-pada-2022</a>
   
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