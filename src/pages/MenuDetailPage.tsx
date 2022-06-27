import Header from '../Components/Header'
import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'

const MenuDetailPage = () => {
  const dummyData = {
    title: "Pure Pisang",
    bahan: [
      "Pisang Segar dan matang"
    ],
    resep: [
      "Cuci pisang yang belum dikupas dengan campuran air dan cuka untuk menyingkirkan bakteri,dan keringkan.",
      "Kupas pisang dan potong kecil-kecil.",
      "Haluskan pisang dengan food processor.",
      "Campur pisang dengan air atau ASI hingga mencapai konsistensi yang diinginkan."
    ],
    saranTitle: "Tips pemberian MPASI untuk bayi 6 bulan",
    saran: [
      "Meski bayi sudah diperkenalkan pada makanan padat, pemberian ASI tetap harus berjalan.",
      "Untuk bayi berusia 6 bulan, berikan MPASI sebanyak 2-3 kali sehari dan 1 sampai 2 kali makanan selingan setiap hari.",
      "Berikan 2-3 sendok MPASI dalam sekali makan, sebagai awalan.",
      "Jumlah porsi dapat meningkat perlahan, hingga menjadi setengah mangkuk berukuran 250 ml.",
      "Berikan makanan secara perlahan.",
      "Jangan memaksakan bayi untuk menghabiskan makanannya.",
      "Durasi makan tidak boleh lebih dari 3 menit.",
      "Jangan memberikan makanan sebagai hadiah.",
      "Jangan makan sambil menonton televisi atau dari perangkat lainnya.",
      "Motivasi anak untuk makan sendiri.",
      "Berikan makanan dalam porsi kecil.",
      "Hentikan pemberian makan jika dalam 15 menit anak hanya bermain-main tanpa makan."
    ]
  }
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Header />
        <Container maxWidth="lg">
          <h1>Sarapan Hari 1</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://www.enervon.co.id/uploads/article/2019/11/28/35c04cccaa1b.jpg" />
          <h2>{dummyData.title} Roti Gandum Isi Selai </h2>
          <h3>Bahan-bahan: Roti Gandum, Selai</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Siapkan Roti Gandum</li>) }
            <li>{resep}Siapkan selai</li>
            <li>{resep}Campurkan selai ke dalam roti. Lalu, roti berisi selai siap untuk dimakan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Sarapan Hari 2</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://www.enervon.co.id/uploads/article/2019/11/28/3f847691e624.jpg" />
          <h2>{dummyData.title} Nasi Goreng Telur  </h2>
          <h3>Bahan-bahan: 1 porsi nasi, <br>1 butir telur, <br>2sdm kecap, <br>1sdm minyak wijen,<br> 1/4sdt garam,<br> 1/2 cangkir kacang polong, <br>1/2 cangkir paprika hijau cacah, <br>2 wortel(potong kecil-kecil), <br>3-5sdm minyak zaitun, <br>1/4 cangkir peterseli </h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Siapkan wajan berisi minyak sayur dan panaskan dengan api sedang. Setelah minyak panas, masukkan nasi dan masak hingga berwarna kecokelatan.</li>) }
            <li>{resep}Tambahkan irisan daun bawang, paprika hijau, wortel, dan kacang polong ke dalam nasi dan aduk hingga merata.</li>
            <li>{resep}Setelah 5 menit atau sayuran terlihat sudah empuk, sisihkan ke bagian samping wajan.</li>
            <li>{resep}Masukkan telur dan aduk hingga kuning dan putih telurnya tercampur rata. Setelah itu, gabungkan dengan nasi dan bahan lainnya tadi dan masak kembali hingga tercampur sempurna dengan nasi.</li>
            <li>{resep}Setelah tercampur, tuangkan minyak wijen, kecap, dan daun peterseli yang telah dicincang, lalu masak hingga matang dan sajikan.</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Sarapan Hari 3</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://www.enervon.co.id/uploads/article/2019/11/28/f2d762fa5716.jpg" />
          <h2>{dummyData.title} Sosis dan Kentang Goreng  </h2>
          <h3>Bahan-bahan: 1 atau 2 buah sosis, 1 buah kentang, 2 lembar sawi, minyak secukupnya</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Siapkan wajan berisi minyak dan panaskan dengan api sedang. Setelah minyak panas, masukkan sosis dan kentang yang sudah dipotong-potong dan masak hingga berwarna kecokelatan.</li>) }
            <li>{resep}Tambahkan sawi ke dalam wajan berisi sosis dan kentang dan aduk hingga merata.</li>
            <li>{resep}Setelah tercampur,lalu masak hingga matang dan sajikan.</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Sarapan Hari 4</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://www.enervon.co.id/uploads/article/2019/11/28/5b75c83b4df5.jpg" />
          <h2>{dummyData.title} Sereal dan Susu Putih  </h2>
          <h3>Bahan-bahan: sereal, susu putih secukupnya</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Siapkan mangkok</li>) }
            <li>{resep}tuangkan sereal ke dalam mangkok</li>
            <li>{resep}setelah itu, tambahkan susu ke dalam mangkok yang berisi sereal. Lalu, siap dimakan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Sarapan Hari 5</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://doktersehat.com/wp-content/uploads/2018/12/resep-sandwich-tuna-doktersehat.jpg" />
          <h2>{dummyData.title} Sandwich Tuna  </h2>
          <h3>Bahan-bahan: 2 lembar lembar roti tawar, <br> 100 gram tuna kalengan,<br> 3 lembar smoked beef yanng sudah dipotong kecil dan dimasak,<br> 150 gram mix vegetable,<br> 50 gram keju cheddar parut, <br>mayonaise dan saos secukupnya</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}panggang roti tawar hingga berwarna kecoklatan</li>) }
            <li>{resep}masukkan sayuran, smoked beef, tuna, keju, dan mayonaise ke dalam roti</li>
            <li>{resep}setelah itu, tambahkan saos atau mayonaise sesuai selera. Kemudian, sandwich siap untuk dimakan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Sarapan Hari 6</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://pict-b.sindonews.net/dyn/620/pena/news/2020/08/18/185/136550/resep-membuat-pancake-pisang-dengan-4-bahan-yang-menyehatkan-rmz.jpg" />
          <h2>{dummyData.title} Pancake Protein Cokelat  </h2>
          <h3>Bahan-bahan: 4 butir telur,<br> 2 buah pisang,<br> 1 cup oatmeal,<br> 3/4 cup bubuk protein,<br> 2sdm bubuk cocoa , <br>1sdt kayu manis</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Blender oatmeal terlebih dahulu hingga halus.</li>) }
            <li>{resep}Kemudian, tambahkan telur, pisang dan bubuk protein ke dalam blender. Lalu, haluskan</li>
            <li>{resep}Tambahkan bubuk cocoa dan kayu manis bubuk, blender kembali hingga halus.</li>
            <li>{resep}Panaskan teflon, kemudian masukkan adonan pancake sedikit demi sedikit. Masak dengan api kecil. Jika permukaan atas sudah berongga, balik pancake agar kedua sisinya matang. Setelah kedua sisinya matang, angkat.</li>
            <li>{resep}Pancake protein cokelat pun siap untuk disajikan.</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Sarapan Hari 7</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://www.enervon.co.id/uploads/article/2019/11/28/9970885374e3.jpg" />
          <h2>{dummyData.title} Salad Buah dan Sayuran  </h2>
          <h3>Bahan-bahan: keju parut, mayonaise secukupnya, buah-buahan dan sayuran yang sudah dipotong</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}siapkan piring</li>) }
            <li>{resep}masukkan buah dan sayuran ke dalam piring</li>
            <li>{resep}tambahkan keju parut dan mayonaise ke dalam piring yang berisi sayur dan buah. Lalu, salad siap untuk dimakan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>
        </Container>

        <Container maxWidth="lg">
          <h1>Makan Siang Hari 1</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://cdn-brilio-net.akamaized.net/news/2020/11/16/195606/1353175-1000xauto-makan-siang-untuk-anak.jpg" />
          <h2>{dummyData.title} Sop Kimlo </h2>
          <h3>Bahan-bahan: 1 bagian paha bawah (rebus, suwir-suwir, biarkan tulangnya jadi kaldu),<br> 15 buah biji tekwan, <br>30 gram bunga sedap malam,<br> seduh lalu tiriskan,<br> 50 gram jamur kuping, seduh lalu iris, <br>50 gram soun,<br> seduh lalu tiriskan, <br> 5 buah bakso ikan iris, <br>1 buah wortel iris bulat-bulat, <br>1 batang daun seledri, <br> 1 batang daun bawang, <br> 1.5 liter air kaldu ayam sisa rebusan, <br>kaldu jamur secukupnya, <br>garam,<br> gula secukupnya,<br> 3 siung bawang putih,<br> 1/2 sdt lada bulat, <br>1/4 sdt pala</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Tumis bumbu halus.</li>) }
            <li>{resep}Panaskan air sisa rebusan ayam. Masukan bumbu halus.</li>
            <li>{resep}Tambahkan biji tekwan, bakso, jamur, sedap malam, dan wortel. Masak hingga mendidih.</li>
            <li>{resep}Masukkan kaldu jamur, gula, dan garam.</li>
            <li>{resep}Masukkan soun, daun bawang, dan seledri. Tunggu hingga mendidih, kemudian Sop Kimlo siap untu dimakan.</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Makan Siang Hari 2</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://cdn-brilio-net.akamaized.net/news/2020/11/16/195606/1353179-1000xauto-makan-siang-untuk-anak.jpg" />
          <h2>{dummyData.title} Chicken Roll Smoked Beef  </h2>
          <h3>Bahan-bahan:1 dada ayam fillet (potong tipis),<br> 1 lembar smoked beef, <br>garam,<br> lada,<br> kaldu jamur,<br>1 sdt garlic powder,<br> 3 sdm bread crumb, <br>1 telur, <br>2 sdm tepung terigu</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Beri ayam garam, lada, kaldu jamur, dan garlic powder.</li>) }
            <li>{resep}Letakkan smoked beef di atas ayam, gulung.</li>
            <li>{resep}Celup ayam ke tepung, telur, tepung, telur, dan breadcrumb.</li>
            <li>{resep}Goreng dalam minyak panas. Kecilkan api setelah terlihat agak kering. Potong sesuai selera.</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>SMakan Siang Hari 3</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://cdn-brilio-net.akamaized.net/news/2020/11/16/195606/1353181-makan-siang-untuk-anak.jpg" />
          <h2>{dummyData.title} Pokcoy Saos Tiram  </h2>
          <h3>Bahan-bahan: 5 bonggol pokcoy,<br>2 buah tofu, potong,<br> 5 siung bawang putih cincang,<br>3 sdm saus tiram, <br>1 sdt maizena larutkan dengan sedikit air, <br>sedikit minyak wijen,<br>garam, <br>gula, <br>penyedap jamur, <br>lada bubuk</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Bersihkan pokcoy, buang ujungnya, rebus, lalu tiriskan.</li>) }
            <li>{resep}Goreng tofu hingga garing.Goreng tofu hingga garing.</li>
            <li>{resep}Tumis bawang putih. Tuang saus tiram dan larutan tepung maizena, aduk rata</li>
            <li>{resep}Masukkan tofu goreng. Beri gula, garam, lada, dan penyedap jamur. Masak sampai mendidih.</li>
            <li>{resep}Siram kuah ke sayuran. Taburi bawang putih kering. Lalu, pokcoy saos tiram siap untuk dimakan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Makan Siang Hari 4</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://cdn-brilio-net.akamaized.net/news/2020/11/16/195606/1353182-makan-siang-untuk-anak.jpg" />
          <h2>{dummyData.title} Bistik Bola Ayam  </h2>
          <h3>Bahan-bahan: 300 gram fillet dada ayam,<br> 3 siung bawang putih,<br> 1 butir telur,<br> 50 gr sagu tani,<br> garam,<br> lada, <br>kaldu jamur secukupnya,<br> 1 buah wortel potong dadu,<br> 1/2 buah jagung pipil, <br>1 buah kentang potong dadu, <br>1/2 buah bawang bombay potong dadu, <br>1 batang daun bawang, <br>3 siung bawang putih haluskan, <br>1 sdm maizena larutkan dengan sedikit air,<br> 4 sdm saus sambal, <br>2 sdm saus tomat, <br>1 sdm kecap manis,<br>100 ml air kaldu ayam, <br>100 ml air,<br>garam dan gula pasir</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Masukkan potongan daging ayam dan bawang putih pada Chopper, giling sampai halus.</li>) }
            <li>{resep}Masukkan telur, garam, lada, kaldu jamur, dan sagu tani. </li>
            <li>{resep}Bulatkan bola ayam, goreng sampai matang, lalu angkat tiriskan.</li>
            <li>{resep}Saus: Panaskan 2 sdm minyak, tumis bawang putih dan bawang bombay sampai harum.</li>
            <li>{resep}Masukkan wortel, kentang, dan jagung. Tuang air dan air kaldu, biarkan mendidih.</li>
            <li>{resep}Masukkan saus sambal, saus tomat, kecap manis, sedikit garam, dan gula.</li>
            <li>{resep}Masak sampai semua bahan matang. Kentalkan dengan maizena.</li>
            <li>{resep}Masukkan bola ayam, taburi daun bawang. Lalu, bistik bola ayam siap untuk dimakan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Makan Siang Hari 5</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://asset.kompas.com/crops/RxtPSZMH6HwtqSE3uW5NDhnw4-c=/87x60:978x654/750x500/data/photo/2021/01/29/6013754c6e583.jpg" />
          <h2>{dummyData.title} Tumis Kangkung Tauco  </h2>
          <h3>Bahan-bahan: 300gr kangkung disiangi, <br>2sdm tauco,<br> 2 lembar daun salam, <br>2 cm lengkuas,<br> 3sdm minyak goreng,<br> 4 buah cabai hijau iris serong,<br> 2 cm jahe, <br>geprek 3 siung bawang putih iris tipis,<br>1 buah bawang bombai iris tipis</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Tumis bawang bombai, bawang putih, cabai hijau, jahe, lengkuas, dan daun salam hingga harum.</li>) }
            <li>{resep}Tambahkan taoco, aduk hingga tauco matang dan tercampur.</li>
            <li>{resep}Masukkan kangkung, aduk-aduk hingga bumbu meresap. Koreksi rasanya, jika kurang sedap bisa ditambahkan kaldu bubuk, MSG, dan juga garam. Lalu, siap untuk dimakan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Makan Siang Hari 6</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://cdn.idntimes.com/content-images/post/20191016/50851591-725648734472813-1301577886372685939-n-36db84c7de97f3ec05a57c26909c1962_600x400.jpg" />
          <h2>{dummyData.title} Ikan Kembung Balado  </h2>
          <h3>Bahan-bahan: 1 kg Ikan kembung cuci hingga bersih dan kucuri dengan jeruk nipis, <br>Secukupnya cabe merah besar, <br>Secukupnya cabe rawit, <br>8 butir bawang merah, <br>3 siung bawang putih, <br>1 buah Tomat,<br> 1 ruas jahe, <br>2 lembar daun jeruk, <br>1 sdm air asam jawa, <br>Secukupnya gula, <br>garam, <br>kaldu bubuk.</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Goreng ikan, namun jangan terlalu kering.</li>) }
            <li>{resep}Uleg bawang merah, bawang putih dan tomat, bisa menggunakan chopper kalau ada. Setelah cukup halus, tambahkan cabe merah besar dan cabe rawit, uleg lagi namun agak kasar.</li>
            <li>{resep}Tumis bumbu hingga harum, lalu tambahkan daun jeruk, jahe geprek, gula, garam, kaldu bubuk dan air asam.</li>
            <li>{resep}Masukkan ikan kedalam tumisan bumbu, masak sebentar saja, dan biarkan bumbu merata.</li>
            <li>{resep}Koreksi rasa, apabila sudah pas, angkat dan sajikan.</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Makan Siang Hari 7</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://img-global.cpcdn.com/recipes/454d5f7368bd1eae/1360x964cq70/tumis-sawi-kuah-daging-recycle-foto-resep-utama.webp" />
          <h2>{dummyData.title} Cah Sawi Dengan Daging  </h2>
          <h3>Bahan-bahan: 1 bh sawi putih, <br>daging sisa gulai di cuci bersih dgn air matang di iris kecil,<br> 3 bh Cabe merah besar, <br>2 bh cabe rawit, <br>3 siung bawang merah,<br> 1 siung bawang putih, <br>garam,kaldu bubuk,<br>merica bubuk (sesuai selera aja), <br>secukupnya air matang,<br> minyak goreng utk menumis</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Cuci bersih sawi putih nya, potong2 sesuai selera aja</li>) }
            <li>{resep}Panaskan wajan,tuang minyak goreng secukupnya utk menumis,setelah wajan panas,masukkan bumbu ug sdh di iris,tumis sampai layu.</li>
            <li>{resep}Masukkan daging,aduk rata sebentar,lalu masukkan sawi dan air matang secukupnya sampai sawi terendam,kemudian masukkan garam,kaldu bubuk,merica bubuk,aduk rata, masak sampai sawi matang,test rasa matang,angkat,sajikan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>
        </Container>

        <Container maxWidth="lg">
          <h1>Makan Malam Hari 1</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/sasefoto/original/31180_resep-sehat-setengah-jam-membuat-salmon-steak-antigagal-ala-restoran-mewah.jpg" />
          <h2>{dummyData.title} Salmon Panggang </h2>
          <h3>Bahan-bahan: 1 potong ikan salmon fillet, <br> 1 buah jeruk lemon,<br> minyak zaitun,<br> daun selada segar,<br>1/4 sdt garam halus,<br> 1/4 sdt merica bubuk</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Lumuri ikan dengan perasan lemon, garam, dan merica bubuk. diamkan selama 3 menit</li>) }
            <li>{resep}Goreng ikan dengan api sedang hingga matang. Lalu, ikan salmon panggang siap untuk dimakan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Makan Malam Hari 2</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://img-global.cpcdn.com/recipes/34bc582c2ae8e44c/751x532cq70/japanese-omurice-omelette-rice-nasi-goreng-telur-ala-jepang-foto-resep-utama.jpg" />
          <h2>{dummyData.title} Nasi Goreng Telur Omlet Keju  </h2>
          <h3>Bahan-bahan:1 piring nasi yang dimasak, <br>1 batang daun bawang cincang halus, <br>1 sdt kecap asin, <br>100 gram ayam cincang, <br>2 lembar sawi, <br>cincang halus, <br>2 sdm kecap manis, <br>minyak goreng untuk menumis,<br> keju untuk toping, <br>1 butir telur,<br> 50 ml air,<br>1 sdm terigu,<br>1/4 sdt garam, <br>2 siung bawang putih, <br>2 siung bawang merah,<br> 1/2 sdt garam</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Campurkan telur dengan garam dan air, aduk hingga mengembang. Tambahkan tepung, aduk hingga adonan menyatu sempurna.</li>) }
            <li>{resep}Panaskan wajan teflon di atas api kecil, masak omelette hingga matang. Pertahankan memasak omelette di api kecil. Angkat dan sisihkan.</li>
            <li>{resep}Tumis bumbu halus hingga wangi. Masukkan ayam kemudian tumis hingga matang.</li>
            <li>{resep}Tumis nasi hingga bumbu tercampur rata. Masukkan sawi cincang, daun bawang, kecap manis, kecap asin dan tumis kembali sampai rata. Angkat.</li>
            <li>{resep} Cetak nasi berbentuk persegi, letakkan omelette yang sudah jadi di atas nasi .</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>SMakan Malam Hari 3</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://3.bp.blogspot.com/-ysWJusFyTho/ULM4OUHG6iI/AAAAAAAAFjI/1MmaRb9DPJo/s1600/Gunung+Putri-20121124-01381.jpg" />
          <h2>{dummyData.title} Cumi Saos Tiram  </h2>
          <h3>Bahan-bahan: 1/2 kg cumi segar,<br>1 bombay kecil, <br>5 siung bawang putih, <br>2 cabai merah keriting iris, <br>1 batang daun bawang, <br>1 jeruk nipis,<br>1 sdm margarin, <br>1 sdt lada bubuk,<br> +/-3 sdm saus tiram, <br>seruas jahe geprek,<br> garam,<br>kaldu bubuk</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Bersihkan cumi, potong sesuai selera, lumuri dengan air jeruk nipis, diamkan sekitar 30 menit, bilas, dan tiriskan.</li>) }
            <li>{resep}Tumis irisan bawang putih. Tambahkan irisan bombay dan jahe.</li>
            <li>{resep}Masukkan cumi, tuang saus tiram, beri lada bubuk, garam, dan kaldu bubuk. Masak sampai matang.</li>
            <li>{resep}Taburi irisan daun bawang, angkat, dan sajikan.</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Makan Malam Hari 4</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2020/02/sop-iga.jpg" />
          <h2>{dummyData.title} Sop Iga Sapi  </h2>
          <h3>Bahan-bahan: 500 gram potongan iga sapi (cuci dan tiriskan), <br>air secukupnya,<br> 1 liter air,<br>1 buah kentang (kupas, cuci, dan potong), <br>1 buah wortel (kupas, cuci, dan potong),<br> 1/2 buah bawang bombay, <br>1/4 biji pala bubuk, <br>1/2 buah tomat,<br> cuci lalu potong,<br> 1 batang bawang daun,<br>iris,<br> 1 batang seledri simpulkan, <br>3 siung bawang putih, <br>1/2 sdt merica butir</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Rebus potongan iga sapi sampai mendidih. Angkat dan sisihkan.</li>) }
            <li>{resep}Rebus lagi iga dengan air sampai matang dan empuk. </li>
            <li>{resep}Tumis bawang bombay dan bumbu halus hingga wangi.</li>
            <li>{resep}Masukkan tumisan dan pala bubuk ke rebusan iga.</li>
            <li>{resep}Masukan kentang dan wortel. Beri garam dan kaldu jamur, masak hingga matang.</li>
            <li>{resep}Masukkan tomat, daun bawang, dan seledri.</li>
            <li>{resep}Setelah mendidih, sop iga sapi siap untuk dimakan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Makan Malam Hari 5</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://sirclocdn.com/little-snack/files/resep-ayam-kecap-mentega.jpeg" />
          <h2>{dummyData.title} Ayam Kecap Mentega </h2>
          <h3>Bahan-bahan: 1 sendok teh garam,<br> 1 sendok makan kecap manis,<br> 1 ekor ayam,<br> 3 sendok makan margarin, <br>75 gram bawang bombay (iris-iris), <br>1 sendok makan kecap asin,<br>2 sendok makan kecap Inggris/worcestershire sauce,<br> 3 batang daun bawang (potong sepanjang 4 cm),<br> 1 sendok teh air jeruk nipis, <br>Minyak goreng secukupnya,<br>1/2 sendok teh merica bubuk,<br>2 siung bawang putih,<br> 1 sendok teh garam</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Lumuri daging ayam dengan bumbu halus. Goreng hingga matang. Tiriskan minyaknya.</li>) }
            <li>{resep}Tumis bawang bombay hingga layu, kemudian masukkan bumbu halus.</li>
            <li>{resep}Setelah tumisan harum, masukkan kecap Inggris, kecap asin, jeruk nipis, dan kecap manis.</li>
            <li>{resep}Masukkan ayam goreng, kemudian masak hingga bumbu meresap.</li>
            <li>{resep}Terakhir masukkan daun bawang. Lalu, siap untuk disajikan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Makan Malam Hari 6</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://selerasa.com/wp-content/uploads/2015/06/images_daging_dendeng-kerings.jpg" />
          <h2>{dummyData.title} Dendeng Daging Sapi </h2>
          <h3>Bahan-bahan: 1,5 sdm peres gula pasir, <br>1 ruas lengkuas,<br> 1 sdm peres garam,<br> 1/2 kg daging sapi, <br>15 buah cabai keriting, <br>15 butir bawang merah ukuran sedang,<br> 2 biji asam,<br> 2 jempol kencur,<br>3 lembar daun jeruk purut,<br> iris halus, <br>8 siung bawang putih ukuran besar,<br> Kelapa parut secukupnya</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Langkah pertama adalah mengiris tipis daging sapi</li>) }
            <li>{resep}Langkah kedua, haluskan semua bumbu. Kemudian campur daging memakai bumbu lalu lulurkan hingga merata.</li>
            <li>{resep}Langkah ketiga, masukkan kelapa parut dan selanjutnya aduk hingga rata.</li>
            <li>{resep}Langkah keempat, kemudian jemur daging sampai kering hingga 3 jam. Dan jangan lupa beberapa kali untuk dibolak-balik. Masukkan ke dalam lemari pendingin.</li>
            <li>{resep}geprek dendeng sapi sampai hancur. kemudian goreng dendeng memakai minyak panas dan jangan lupa terus bolak-balik hingga matang. Lalu, sajikan</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>

          <h1>Makan Malam Hari 7</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://i.ytimg.com/vi/kCRtcWkT3hY/maxresdefault.jpg" />
          <h2>{dummyData.title} Sayur Bayam Jagung  </h2>
          <h3>Bahan-bahan: 1 ikat bayam petik-petik daunnya,<br> 1 jagung manis pipil, <br>1 buah tomat potong kotak-kotak, <br>3 siung bawang merah iris tipis,<br> 1 siung bawang putih iris tipis,<br>3 lembar daun salam, <br>secukupnya garam,<br>secukupnya gula,<br>secukupnya lada,<br>secukupnya kaldu ayam bubuk</h3>
          <h3>Resep: </h3>
          <ol>
            { dummyData.resep.map(resep => <li>{resep}Cuci bersih daun bayam</li>) }
            <li>{resep}Didihkan air lalu masukkan bawang merah, bawang putih, daun salam</li>
            <li>{resep}Masukkan jagung manis terlebih dahulu, bisa juga ditambahkan wortel </li>
            <li>{resep}Setelah empuk, masukkan daun bayam</li>
            <li>{resep}Beri garam, gula, lada, dan kaldu ayam, aduk rata, tunggu sampai bayam menjadi hijau cerah</li>
            <li>{resep}Tes rasa, angkat, dan sajikan.</li>
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>
        </Container>

    </>
  )
  } 

export default MenuDetailPage