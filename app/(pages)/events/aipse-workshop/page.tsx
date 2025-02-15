import Image from "next/image"
import Link from "next/link"

//logos :)))))
import aipseLogo from "@/public/assets/aipse_orange-transparent.png"
import dtsLogo from "@/public/assets/DTS_new_logo.png"
import chatgptLogo from "@/public/assets/ChatGPT-Logo-With-Transparent-Background.png"
import faissLogo from "@/public/assets/FAISS.png"
import groqLogo from "@/public/assets/groq-logo.png"
import langchainLogo from "@/public/assets/Lang Chain.png"
import pineconeLogo from "@/public/assets/Pinecone-Logo.webp"
import fotoNarsum from "@/public/assets/fotoNarsum.png"
import fotoMod from "@/public/assets/fotoModerator.jpg"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="bg-[#fefefe]">
      <div className="py-10 bg-[#a9e5bb]">
        <div className="px-5 lg:px-40 xl:px-72">
          <h1 className="text-center text-[32px] leading-[40px] font-bold font-stretch-condensed tracking-wider text-[#1b4a49] lg:text-5xl lg:leading-[72px]">
            Developing GenAI Chatbot using LangChain: LLM and simple RAG
          </h1>
          <h2 className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
            22 Feb & 1 Mar | Online
          </h2>
          <p className="text-center pt-8 text-[#36485C] lg:text-[20px] lg:leading-7">
            Dengan berkembangnya AI, memahami cara kerja chatbot cerdas menjadi
            keterampilan yang semakin berharga. Workshop ini akan membekalimu
            dengan konsep AI, LangChain, dan RAG untuk membangun solusi berbasis
            AI.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-x-6 pt-[50px]">
          <Link href="https://ppij.org/AIPSEPPIJGENAI">
            <Button variant="secondary" size="lg">
              Registrasi Sekarang
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full flex md:pt-5 justify-center relative bg-linear-to-b from-ga-light-green from-50% to-ga-white to-50%">
        <div>
          <h2 className="text-md lg:text-2xl text-center px-1 text-[#36485C]">
            Moderator: Muhammad Rafi Aziz Dzakwan
          </h2>
          <Image src={fotoMod} alt="fotoModerator" width={500} />
        </div>
        <div>
          <h2 className="text-md lg:text-2xl px-1 text-center text-[#36485C]">
            Narasumber: Alvin Rindra Fazrie, M.Sc
          </h2>
          <div className="bg-[#000020]">
            <Image src={fotoNarsum} alt="fotoNarsum" width={500} height={200} />
          </div>
        </div>
      </div>

      <div className="">
        <div className="w-full pb-10 pt-5 md:pt-20 px-6 max-w-7xl mx-auto flex-col flex gap-10">
          <div>
            <h2 className="text-2xl text-[#36485C] lg:leading-6">
              Tempat dan Waktu
            </h2>
            <div className="pl-5 lg:text-[24px]">
              <p className="pt-8">🗓️ 22 Februari & 1 Maret 2025</p>
              <p>⏰ 07:30-11:30 CET | 13:30-17:30 WIB</p>
              <p>📍 Zoom Meeting</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl text-[#36485C] leading-6">Tentang Event</h2>
            <div className="pl-5 lg:text-[18px]">
              <div className="pt-10">
                <p>
                  <span className="font-bold">Our Instructor:</span> Alvin
                  Rindra Fazrie, M.Sc., Senior AI & Data Consultant
                </p>
                <p>
                  • Senior AI and Data Consultant at Lufthansa <br />
                  • M.Sc. in Intelligent Adaptive Systems, Universität Hamburg,
                  Germany.
                  <br />
                  • SAP & Business Intelligence, Universität Duisburg-Essen,
                  Germany.
                  <br />
                  • Google Certified TensorFlow and Professional Machine
                  Learning Engineer.
                  <br />• Lebih dari 5 tahun pengalaman implementasi AI+Data
                  Sains di Startup maupun perusahaan besar di Jerman.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-bold">What you will learn:</p>
                <p>
                  🌟 Pengenalan AI dan Machine Learning <br />
                  🌟 Dasar-dasar Python dan penerapannya dalam LangChain
                  <br />
                  🌟 Membangun chatbot menggunakan LangChain
                  <br />
                  🌟 Pengenalan Retrieval Augmented Generation (RAG)
                  <br />
                  🌟 Teknik prompt engineering dan penggunaan Vector Databases
                </p>
              </div>

              <div className="pt-4">
                <p className="font-bold">What you will get: </p>
                <p>
                  ✅ Praktik coding langsung membangun chatbot AI
                  <br />
                  ✅ Sertifikat untuk menambah nilai CV-mu
                  <br />
                  ✅ Handbook materi lengkap dalam format PDF
                  <br />✅ Networking dengan para profesional lainnya
                </p>
              </div>

              <div>
                <p className="font-bold pt-4">Workshop tools:</p>
                <div className="flex flex-row flex-wrap items-center gap-5 pt-[20px] sm:">
                  <Image src={chatgptLogo} alt="Logo chatGPT" width={100} />
                  <Image src={langchainLogo} alt="Logo LangChain" width={100} />
                  <Image src={groqLogo} alt="Logo Groq" width={100} />
                  <Image src={faissLogo} alt="Logo FAISS" width={100} />
                  <Image src={pineconeLogo} alt="Logo Pinecone" width={100} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl text-[#36485C] leading-6">
              Biaya Pendaftaran
            </h2>
            <div className="pt-8">
              <div className="pl-5 lg:text-[18px]">
                <p className="font-bold">Untuk Mahasiswa:</p>
                <p>
                  • 5 orang pertama: 30€ (Rp 500.000,-)
                  <br />• orang selanjutnya: 35€ (Rp 585.000,-)
                </p>
                <p className="font-bold">Untuk umum:</p>
                <p>
                  • 5 orang pertama: 45€ (Rp 750.000,-)
                  <br />• orang selanjutnya: 50€ (Rp 840.000,-)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-[50px]">
          <Image src={aipseLogo} alt="Logo AIPSE" width={200} height={71.56} />
          <Image src={dtsLogo} alt="Logo DTS" width={200} height={71.56} />
        </div>
      </div>
    </div>
  )
}
