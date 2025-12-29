import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Trophy, User, BookOpen, GraduationCap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type QuizLevel = "pemula" | "intermediate" | null;

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const pemulaQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "FinTech adalah layanan keuangan yang menggunakan…",
    options: ["Teknologi digital", "Mesin produksi", "Jaringan TV", "Sistem manual"],
    correctAnswer: 0,
    explanation: "FinTech (Financial Technology) adalah layanan keuangan yang memanfaatkan teknologi digital untuk memudahkan transaksi dan layanan keuangan.",
  },
  {
    id: 2,
    question: "Contoh FinTech yang paling sering digunakan masyarakat adalah…",
    options: ["Peta digital", "Dompet digital seperti OVO atau DANA", "Aplikasi edit foto", "Mesin ATM"],
    correctAnswer: 1,
    explanation: "Dompet digital seperti OVO, DANA, GoPay adalah contoh FinTech yang paling sering digunakan masyarakat Indonesia untuk pembayaran sehari-hari.",
  },
  {
    id: 3,
    question: "Tujuan utama FinTech adalah…",
    options: ["Membuat transaksi lebih cepat dan mudah", "Menghilangkan penggunaan internet", "Mengurangi penggunaan smartphone", "Menghapus bank konvensional sepenuhnya"],
    correctAnswer: 0,
    explanation: "Tujuan utama FinTech adalah membuat transaksi keuangan menjadi lebih cepat, mudah, dan efisien bagi masyarakat.",
  },
  {
    id: 4,
    question: "Salah satu cara melindungi akun FinTech adalah…",
    options: ["Membagikan kode OTP ke teman", "Mengaktifkan verifikasi dua langkah", "Menyimpan PIN di media sosial", "Menggunakan Wi-Fi publik tanpa hati-hati"],
    correctAnswer: 1,
    explanation: "Mengaktifkan verifikasi dua langkah (2FA) adalah salah satu cara terbaik untuk melindungi akun FinTech dari akses tidak sah.",
  },
  {
    id: 5,
    question: "OTP (One-Time Password) digunakan untuk…",
    options: ["Mengubah warna tampilan aplikasi", "Mengamankan proses login dan transaksi", "Menghilangkan notifikasi", "Menghubungkan aplikasi ke TV"],
    correctAnswer: 1,
    explanation: "OTP adalah kode sekali pakai yang digunakan untuk mengamankan proses login dan transaksi agar hanya pemilik akun yang bisa mengaksesnya.",
  },
  {
    id: 6,
    question: "Yang termasuk contoh penipuan online (scam) adalah…",
    options: ["Pesan WA yang meminta klik link mencurigakan", "Notifikasi resmi dari aplikasi", "SMS promosi dari operator", "Email tagihan listrik resmi"],
    correctAnswer: 0,
    explanation: "Pesan yang meminta klik link mencurigakan adalah modus penipuan phishing yang sering digunakan untuk mencuri data pribadi.",
  },
  {
    id: 7,
    question: "Data pribadi yang tidak boleh dibagikan kepada siapa pun adalah…",
    options: ["Nama panggilan", "Nomor sepatu", "OTP dan PIN", "Makanan favorit"],
    correctAnswer: 2,
    explanation: "OTP dan PIN adalah data rahasia yang tidak boleh dibagikan kepada siapa pun, termasuk pihak yang mengaku dari bank atau FinTech.",
  },
  {
    id: 8,
    question: "Apa yang harus dilakukan jika ada transaksi mencurigakan di e-wallet?",
    options: ["Diamkan saja", "Bagikan ke grup untuk bertanya", "Segera ubah PIN dan hubungi layanan pelanggan", "Login di banyak perangkat agar aman"],
    correctAnswer: 2,
    explanation: "Jika ada transaksi mencurigakan, segera ubah PIN dan hubungi layanan pelanggan untuk mengamankan akun Anda.",
  },
  {
    id: 9,
    question: "Mengapa tidak disarankan login aplikasi keuangan di Wi-Fi publik?",
    options: ["Karena terlalu cepat", "Karena Wi-Fi publik rentan disadap", "Karena boros baterai", "Karena tidak boleh digunakan orang umum"],
    correctAnswer: 1,
    explanation: "Wi-Fi publik rentan terhadap serangan man-in-the-middle yang dapat mencuri data login dan informasi sensitif Anda.",
  },
  {
    id: 10,
    question: "Salah satu tanda aplikasi FinTech ilegal adalah…",
    options: ["Terdaftar di OJK", "Meminta akses penuh ke kontak dan galeri", "Memiliki situs resmi", "Tersedia di Play Store dengan rating bagus"],
    correctAnswer: 1,
    explanation: "Aplikasi FinTech ilegal sering meminta akses berlebihan ke data pribadi seperti kontak dan galeri tanpa alasan yang jelas.",
  },
  {
    id: 11,
    question: "Lembaga yang mengawasi layanan FinTech di Indonesia adalah…",
    options: ["OJK dan Bank Indonesia", "BPJS", "KPU", "BMKG"],
    correctAnswer: 0,
    explanation: "OJK (Otoritas Jasa Keuangan) dan Bank Indonesia adalah lembaga yang mengawasi dan mengatur layanan FinTech di Indonesia.",
  },
  {
    id: 12,
    question: "Satgas PASTI dibentuk untuk…",
    options: ["Membuat aplikasi game", "Memberantas pinjaman dan investasi ilegal", "Menjual produk digital", "Mengatur harga pasar"],
    correctAnswer: 1,
    explanation: "Satgas PASTI (Penanganan Aktivitas Keuangan Ilegal) dibentuk untuk memberantas pinjaman online dan investasi ilegal.",
  },
  {
    id: 13,
    question: "Jika ingin memastikan aplikasi FinTech legal, pengguna harus…",
    options: ["Menanyakan ke teman", "Melihat influencer yang mempromosikan", "Mengecek daftar resmi OJK", "Mengunduh dari link acak"],
    correctAnswer: 2,
    explanation: "Cara terbaik memastikan aplikasi FinTech legal adalah dengan mengecek daftar resmi di website OJK (ojk.go.id).",
  },
  {
    id: 14,
    question: "IASC (Indonesia ASEAN Smart City Network) berperan dalam…",
    options: ["Mendorong pemanfaatan teknologi untuk layanan publik yang lebih modern", "Menutup layanan keuangan digital", "Menghapus sistem pembayaran online", "Mengurangi penggunaan internet"],
    correctAnswer: 0,
    explanation: "IASC berperan dalam mendorong pemanfaatan teknologi untuk meningkatkan kualitas layanan publik yang lebih modern dan efisien.",
  },
  {
    id: 15,
    question: "Mengapa regulasi penting dalam FinTech?",
    options: ["Untuk membatasi kreativitas teknologi", "Untuk melindungi konsumen dari penipuan dan penyalahgunaan data", "Untuk menurunkan penggunaan aplikasi", "Untuk menghapus bank digital"],
    correctAnswer: 1,
    explanation: "Regulasi penting untuk melindungi konsumen dari penipuan, penyalahgunaan data, dan menjaga stabilitas sistem keuangan.",
  },
];

const intermediateQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Prinsip fundamental FinTech dalam transformasi keuangan adalah…",
    options: ["Menggantikan seluruh peran bank konvensional", "Menggabungkan teknologi digital dengan layanan keuangan untuk meningkatkan efisiensi dan inklusi", "Mengurangi penggunaan sistem keamanan", "Mengutamakan layanan manual"],
    correctAnswer: 1,
    explanation: "Prinsip fundamental FinTech adalah menggabungkan teknologi digital dengan layanan keuangan untuk meningkatkan efisiensi, aksesibilitas, dan inklusi keuangan.",
  },
  {
    id: 2,
    question: "Dampak utama FinTech terhadap inklusi keuangan terutama dirasakan oleh…",
    options: ["Segmen masyarakat yang sudah mapan secara finansial", "Masyarakat yang sulit menjangkau layanan keuangan formal", "Korporasi besar saja", "Hanya sektor asuransi"],
    correctAnswer: 1,
    explanation: "FinTech memiliki dampak terbesar bagi masyarakat unbanked dan underbanked yang sebelumnya sulit menjangkau layanan keuangan formal.",
  },
  {
    id: 3,
    question: "FinTech dapat mendorong persaingan industri keuangan melalui…",
    options: ["Meningkatkan biaya transaksi", "Inovasi berbasis data dan otomatisasi", "Mengurangi akses masyarakat terhadap layanan digital", "Membatasi layanan 24 jam"],
    correctAnswer: 1,
    explanation: "FinTech mendorong persaingan melalui inovasi berbasis data, otomatisasi, dan efisiensi yang memaksa pemain tradisional untuk berinovasi.",
  },
  {
    id: 4,
    question: "Risiko sistemik dalam FinTech terutama muncul ketika…",
    options: ["Pengguna tidak memiliki internet", "Platform digital memiliki skala besar dan rentan gangguan keamanan", "Ada banyak promo cashback", "Pengguna menggunakan password yang kuat"],
    correctAnswer: 1,
    explanation: "Risiko sistemik muncul ketika platform FinTech berskala besar mengalami gangguan keamanan yang dapat berdampak luas pada sistem keuangan.",
  },
  {
    id: 5,
    question: "Salah satu pembedaan paling kritis antara P2P Lending legal dan ilegal adalah…",
    options: ["Warna logo aplikasi", "Tercatat dan diawasi oleh OJK serta tidak meminta akses berlebihan ke perangkat", "Jumlah unduhan di Play Store", "Banyaknya influencer yang mempromosikan"],
    correctAnswer: 1,
    explanation: "P2P Lending legal tercatat di OJK, tidak meminta akses berlebihan ke perangkat, dan memiliki prosedur penagihan yang sesuai regulasi.",
  },
  {
    id: 6,
    question: "Dalam FinTech Wealth Management, peran robo-advisor adalah…",
    options: ["Menentukan suku bunga bank", "Memberikan rekomendasi investasi otomatis berbasis algoritma", "Menetapkan pajak", "Mengatur penarikan tunai"],
    correctAnswer: 1,
    explanation: "Robo-advisor memberikan rekomendasi investasi otomatis berbasis algoritma berdasarkan profil risiko dan tujuan keuangan pengguna.",
  },
  {
    id: 7,
    question: "Contoh nyata InsurTech yang mengubah industri asuransi adalah…",
    options: ["Menjual polis lewat toko offline", "Menggunakan AI untuk klaim otomatis dan mikroasuransi", "Menghapus premi", "Mengganti agen tradisional dengan robot fisik"],
    correctAnswer: 1,
    explanation: "InsurTech menggunakan AI untuk proses klaim otomatis, mikroasuransi berbasis penggunaan, dan personalisasi produk asuransi.",
  },
  {
    id: 8,
    question: "Payment gateway seperti Midtrans dan Xendit memiliki peran penting yaitu…",
    options: ["Menyimpan semua data pengguna", "Menjadi penghubung aman antara merchant dan sistem pembayaran", "Menentukan tarif ongkir", "Mengatur pajak transaksi"],
    correctAnswer: 1,
    explanation: "Payment gateway berperan sebagai penghubung aman antara merchant dan sistem pembayaran, memfasilitasi transaksi online secara efisien.",
  },
  {
    id: 9,
    question: "Jika sebuah aplikasi meminta akses ke kontak, SMS, dan galeri tanpa alasan operasional yang jelas, maka hal tersebut menunjukkan…",
    options: ["Aplikasi resmi", "Risiko pencurian data dan potensi spyware", "Keamanan tingkat tinggi", "Kewajiban regulasi"],
    correctAnswer: 1,
    explanation: "Permintaan akses berlebihan tanpa alasan operasional yang jelas menunjukkan risiko pencurian data dan potensi spyware atau malware.",
  },
  {
    id: 10,
    question: "Teknik social engineering yang paling sering digunakan dalam penipuan FinTech adalah…",
    options: ["Pengiriman OTP otomatis", "Pesan berpura-pura dari layanan resmi yang mengarahkan korban ke link palsu", "Update aplikasi", "Login biometrik"],
    correctAnswer: 1,
    explanation: "Phishing melalui pesan yang berpura-pura dari layanan resmi adalah teknik social engineering paling umum untuk mencuri kredensial pengguna.",
  },
  {
    id: 11,
    question: "OTP merupakan komponen keamanan penting karena…",
    options: ["Dapat dipakai berkali-kali", "Hanya berlaku sementara dan membatasi akses transaksi pada pengguna yang berwenang", "Mempercepat transaksi tanpa verifikasi", "Digunakan untuk promosi cashback"],
    correctAnswer: 1,
    explanation: "OTP hanya berlaku sementara (biasanya beberapa menit) sehingga membatasi window kesempatan bagi penyerang untuk menyalahgunakannya.",
  },
  {
    id: 12,
    question: "Ancaman terbesar bagi pengguna aplikasi keuangan digital yang menggunakan Wi-Fi publik adalah…",
    options: ["Baterai cepat habis", "Serangan man-in-the-middle yang dapat mencuri data login atau transaksi", "Kecepatan internet terlalu tinggi", "Aplikasi tidak dapat dibuka"],
    correctAnswer: 1,
    explanation: "Serangan man-in-the-middle pada Wi-Fi publik memungkinkan penyerang menyadap komunikasi dan mencuri data sensitif seperti kredensial login.",
  },
  {
    id: 13,
    question: "Konsep data minimization dalam privasi digital berarti…",
    options: ["Aplikasi berhak meminta seluruh data pengguna", "Hanya data yang benar-benar diperlukan yang boleh dikumpulkan dan diproses", "Semua data harus disimpan tanpa batas waktu", "Pengguna wajib memberikan akses penuh"],
    correctAnswer: 1,
    explanation: "Data minimization adalah prinsip privasi yang menyatakan bahwa hanya data yang benar-benar diperlukan untuk tujuan tertentu yang boleh dikumpulkan.",
  },
  {
    id: 14,
    question: "Jika pengguna menemukan aktivitas login mencurigakan pada aplikasi keuangan, tindakan paling tepat adalah…",
    options: ["Menggunakan akun seperti biasa", "Menunggu hingga pelaku selesai", "Segera mengganti password, mengaktifkan 2FA, dan menghubungi layanan resmi", "Menutup aplikasi selamanya"],
    correctAnswer: 2,
    explanation: "Tindakan tepat adalah segera mengganti password, mengaktifkan 2FA, dan menghubungi layanan resmi untuk mengamankan akun.",
  },
  {
    id: 15,
    question: "Regulasi OJK terhadap FinTech bertujuan untuk…",
    options: ["Membatasi pertumbuhan ekonomi digital", "Melindungi konsumen serta menjaga stabilitas sistem keuangan", "Menutup inovasi teknologi baru", "Menghilangkan persaingan industri"],
    correctAnswer: 1,
    explanation: "Regulasi OJK bertujuan untuk melindungi konsumen dan menjaga stabilitas sistem keuangan tanpa menghambat inovasi.",
  },
  {
    id: 16,
    question: "Salah satu indikator FinTech legal adalah…",
    options: ["Tercantum dalam daftar OJK dan mematuhi prinsip perlindungan data", "Memiliki banyak iklan di media sosial", "Menggunakan nama yang mirip lembaga resmi", "Menawarkan bunga sangat tinggi"],
    correctAnswer: 0,
    explanation: "FinTech legal tercantum dalam daftar OJK dan mematuhi prinsip perlindungan data serta regulasi yang berlaku.",
  },
  {
    id: 17,
    question: "Peran utama IASC (Indonesia Anti-Scam Centre) dalam perlindungan konsumen adalah…",
    options: ["Memproses pinjaman digital", "Mengumpulkan pajak transaksi", "Menjadi pusat pelaporan penipuan keuangan serta memfasilitasi pemblokiran rekening penipu", "Menerbitkan aplikasi dompet digital"],
    correctAnswer: 2,
    explanation: "IASC berperan sebagai pusat pelaporan penipuan keuangan dan memfasilitasi pemblokiran rekening penipu secara cepat.",
  },
  {
    id: 18,
    question: "Mekanisme pelaporan ke IASC harus melalui…",
    options: ["Media sosial pribadi", "Website resmi iasc.ojk.go.id atau kanal resmi OJK/Satgas PASTI", "Link yang dikirimkan melalui pesan broadcast", "Grup WhatsApp"],
    correctAnswer: 1,
    explanation: "Pelaporan ke IASC harus melalui kanal resmi yaitu website iasc.ojk.go.id atau kanal resmi OJK/Satgas PASTI untuk memastikan validitas laporan.",
  },
  {
    id: 19,
    question: "Ketika terjadi kasus scam yang melibatkan rekening penampung dana, IASC dan Satgas PASTI dapat…",
    options: ["Mengabaikan laporan", "Memblokir rekening penipu melalui koordinasi dengan perbankan", "Hanya memberikan peringatan tanpa tindakan", "Memaksa pengguna untuk menutup akun fintech mereka"],
    correctAnswer: 1,
    explanation: "IASC dan Satgas PASTI dapat memblokir rekening penipu melalui koordinasi dengan perbankan untuk menghentikan aliran dana ilegal.",
  },
  {
    id: 20,
    question: "Pentingnya literasi regulasi (OJK, BI, IASC) bagi pengguna FinTech adalah…",
    options: ["Agar masyarakat tidak perlu menggunakan internet", "Agar pengguna dapat mengenali layanan legal, menghindari scam, dan melindungi data pribadi", "Agar pengguna merasa takut menggunakan digital banking", "Agar aplikasi FinTech semakin mahal"],
    correctAnswer: 1,
    explanation: "Literasi regulasi penting agar pengguna dapat mengenali layanan legal, menghindari scam, dan melindungi data pribadi mereka.",
  },
];

const KuisPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = selectedLevel === "pemula" ? pemulaQuestions : intermediateQuestions;

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const backToLevelSelect = () => {
    setSelectedLevel(null);
    resetQuiz();
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { message: "Luar Biasa!", color: "text-accent" };
    if (percentage >= 60) return { message: "Bagus!", color: "text-blue-500" };
    if (percentage >= 40) return { message: "Cukup Baik", color: "text-orange-500" };
    return { message: "Perlu Belajar Lagi", color: "text-red-500" };
  };

  const question = selectedLevel ? questions[currentQuestion] : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Kuis Interaktif</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Uji <span className="text-accent">Pengetahuan</span> Fintech Anda
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Jawab pertanyaan seputar keamanan fintech, regulasi OJK & BI, 
              dan pencegahan penipuan transaksi keuangan.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Level Selection */}
            {!selectedLevel && (
              <div className="animate-scale-in">
                <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                  Pilih Tingkat Kesulitan
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pemula Card */}
                  <button
                    onClick={() => setSelectedLevel("pemula")}
                    className="group bg-card rounded-2xl border border-border p-8 shadow-lg hover:border-accent hover:shadow-xl transition-all duration-300 text-left"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <BookOpen className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Pemula</h3>
                    <p className="text-muted-foreground mb-4">
                      15 soal dasar tentang FinTech, keamanan digital, dan regulasi untuk pemula.
                    </p>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>Mulai Kuis</span>
                      <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Intermediate Card */}
                  <button
                    onClick={() => setSelectedLevel("intermediate")}
                    className="group bg-card rounded-2xl border border-border p-8 shadow-lg hover:border-accent hover:shadow-xl transition-all duration-300 text-left"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <GraduationCap className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Intermediate</h3>
                    <p className="text-muted-foreground mb-4">
                      20 soal menengah tentang konsep lanjutan FinTech, risiko, dan perlindungan konsumen.
                    </p>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>Mulai Kuis</span>
                      <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Quiz Active */}
            {selectedLevel && !quizCompleted && question && (
              <div className="bg-card rounded-2xl border border-border p-8 shadow-lg animate-scale-in">
                {/* Back Button */}
                <button
                  onClick={backToLevelSelect}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="text-sm">Kembali ke Pilihan Level</span>
                </button>

                {/* Level Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  {selectedLevel === "pemula" ? <BookOpen className="h-3 w-3" /> : <GraduationCap className="h-3 w-3" />}
                  <span>{selectedLevel === "pemula" ? "Pemula" : "Intermediate"}</span>
                </div>

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
                    <span>Skor: {score}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-gradient transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  {question.question}
                </h2>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === question.correctAnswer;
                    const showCorrect = showResult && isCorrect;
                    const showWrong = showResult && isSelected && !isCorrect;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                        className={cn(
                          "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                          isSelected && !showResult && "border-accent bg-accent/10",
                          !isSelected && !showResult && "border-border hover:border-accent/50 hover:bg-secondary/50",
                          showCorrect && "border-accent bg-accent/20",
                          showWrong && "border-destructive bg-destructive/10",
                          showResult && !showCorrect && !showWrong && "opacity-50"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                            isSelected && !showResult && "bg-accent text-accent-foreground",
                            !isSelected && !showResult && "bg-secondary text-muted-foreground",
                            showCorrect && "bg-accent text-accent-foreground",
                            showWrong && "bg-destructive text-destructive-foreground"
                          )}>
                            {showCorrect ? <CheckCircle className="h-5 w-5" /> : 
                             showWrong ? <XCircle className="h-5 w-5" /> :
                             String.fromCharCode(65 + index)}
                          </div>
                          <span className="text-foreground">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showResult && (
                  <div className={cn(
                    "p-4 rounded-xl mb-6 animate-slide-up",
                    selectedAnswer === question.correctAnswer ? "bg-accent/10 border border-accent/30" : "bg-destructive/10 border border-destructive/30"
                  )}>
                    <p className="text-sm text-foreground">
                      <strong>Penjelasan:</strong> {question.explanation}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-4">
                  {!showResult ? (
                    <Button
                      onClick={handleSubmit}
                      disabled={selectedAnswer === null}
                      className="flex-1"
                      variant="accent"
                    >
                      Jawab
                    </Button>
                  ) : (
                    <Button onClick={handleNext} className="flex-1" variant="accent">
                      {currentQuestion < questions.length - 1 ? "Pertanyaan Berikutnya" : "Lihat Hasil"}
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Quiz Result */}
            {selectedLevel && quizCompleted && (
              <div className="bg-card rounded-2xl border border-border p-8 shadow-lg text-center animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-10 w-10 text-accent" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  {selectedLevel === "pemula" ? <BookOpen className="h-3 w-3" /> : <GraduationCap className="h-3 w-3" />}
                  <span>Level {selectedLevel === "pemula" ? "Pemula" : "Intermediate"}</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Kuis Selesai!</h2>
                <p className={cn("text-2xl font-semibold mb-6", getScoreMessage().color)}>
                  {getScoreMessage().message}
                </p>
                
                <div className="bg-secondary/50 rounded-xl p-6 mb-8">
                  <div className="text-5xl font-bold text-foreground mb-2">
                    {score}/{questions.length}
                  </div>
                  <p className="text-muted-foreground">Jawaban Benar</p>
                  <div className="mt-4 h-4 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-gradient"
                      style={{ width: `${(score / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={resetQuiz} variant="accent" size="lg">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Ulangi Kuis
                  </Button>
                  <Button onClick={backToLevelSelect} variant="outline" size="lg">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Pilih Level Lain
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KuisPage;
