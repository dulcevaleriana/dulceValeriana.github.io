import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Menu from './components/menu'
import Header from './components/header'
import ImageGroup from './components/imageGroup'
import CheckUser from './components/checkUser'
import Persona from './components/persona'
import ExperienceMap from './components/experienceMap'
import DbaModel from './components/dbaModel'
import GalleryComponent from './components/galleryComponent'
import Implement from './components/implement'
import NextStep from './components/nextStep'
import Footer from './components/footer'

const Home = () => {
  return <div className={styles.container}>
    <Head>
      <title>Feelit || UX Case Use</title>
      <meta name="description" content="Desarrollar un software como servicio (SAAS) que permita a los pacientes enviar resultados médicos a un médico, agendar citas médicas tradicionales y agendar citas rápidas de 5 minutos, ambas pueden ser virtuales a través de video llamadas o chat, o presenciales." />
      <link rel="icon" href="/image/logo.svg" />
    </Head>
    <Menu/>
    <Header
      title="Feelit"
      subTitle="Borrón UX Case"
      data="Desarrollar un software como servicio (SAAS) que permita a los pacientes enviar resultados médicos a un médico, agendar citas médicas tradicionales y agendar citas rápidas de 5 minutos, ambas pueden ser virtuales a través de video llamadas o chat, o presenciales."
      imageData={{
        imageLink:"/image/doctor/Frame.png",
        imageAlt:"feelit's dashboard wireframe",
        imageWidth:738,
        imageHeight:414.92
      }}
    />
    <ImageGroup
      ImageGroupArray={[
        "/image/doctor/Frame.png",
        "/image/doctor/Frame-1.png",
        "/image/doctor/Frame-2.png",
        "/image/doctor/Frame-3.png",
        "/image/doctor/Frame-4.png",
        "/image/doctor/Frame-5.png",
        "/image/doctor/Frame-6.png",
        "/image/doctor/Frame-7.png",
        "/image/doctor/Frame-8.png",
        "/image/doctor/Frame-9.png",
        "/image/doctor/Frame-10.png",
        "/image/doctor/Frame-11.png",
        "/image/doctor/Frame-12.png",
        "/image/doctor/Frame-13.png",
        "/image/doctor/Frame-14.png",
        "/image/doctor/Frame-15.png",
        "/image/doctor/Frame-16.png",
        "/image/doctor/Frame-17.png",
        "/image/doctor/Frame-18.png",
        "/image/doctor/Frame-19.png",
        "/image/doctor/Frame-20.png",
        "/image/doctor/Frame-21.png",
        "/image/doctor/Frame-22.png",
        "/image/doctor/Frame-23.png",
        "/image/doctor/Frame-24.png",
        "/image/doctor/Frame-25.png",
        "/image/doctor/Frame-26.png",
        "/image/doctor/Frame-27.png",
        "/image/doctor/Frame-28.png",
        "/image/doctor/Frame-29.png",
        "/image/doctor/Frame-30.png",
      ]}
    />
    <Header
      title="Objetivo del estudio"
      data="El objetivo del presente estudio consiste en diseñar e implementar un software como servicio (SAAS) que permita a los pacientes gestionar de manera eficiente y efectiva sus citas médicas y resultados, y proporcionarles la opción de agendar citas rápidas virtuales o presenciales de 5 minutos. Para lograrlo, se realizará una investigación de usuarios que permita identificar las necesidades y deseos de los usuarios en cuanto a la organización de su rutina diaria y cuidado de la salud."
      imageData={{
        imageLink:"/image/doctor/Frame-1.png",
        imageAlt:"feelit's form to send result (step number one)",
        imageWidth:738,
        imageHeight:414.92
      }}
    />
    <CheckUser
        title="Investigación de usuarios"
        data="Se realizaron encuestas y entrevistas a un grupo de personas interesadas en mejorar su experiencia en el cuidado de la salud para entender mejor sus necesidades y deseos en cuanto a un servicio que pueda ayudarlos a coordinar sus citas y resultados médicos. Los usuarios expresaron un gran interés en tener una plataforma que pueda ayudarlos a organizar sus citas y resultados médicos de manera efectiva."
        questions={[
          {
            question:"¿Organizas actualmente tus citas médicas y resultados?",
            selected: false,
            answer:{
                yes:1,
                maybe:2,
                not:10
            }
          },
          {
            question:"¿Te resulta difícil recordar cuándo tienes una cita médica?",
            selected: false,
            answer:{
                yes:5,
                maybe:6,
                not:2
            }
          },
          {
            question:"¿Es importante para ti tener una buena organización de tus citas médicas?",
            selected: false,
            answer:{
                yes:9,
                maybe:3,
                not:1
            }
          },
          {
            question:"¿Has utilizado alguna aplicación o servicio para gestionar tus citas médicas anteriormente?",
            selected: false,
            answer:{
                yes:12,
                maybe:1,
                not:0
            }
          },
          {
            question:"¿Te gustó las características particulares de esa aplicación o servicio?",
            selected: false,
            answer:{
                yes:8,
                maybe:2,
                not:3
            }
          },
          {
            question:"¿Te gustaría recibir tus resultados médicos a través de una aplicación?",
            selected: false,
            answer:{
                yes:5,
                maybe:6,
                not:2
            }
          },
          {
            question:"¿Te gustaría tener la opción de programar citas médicas rápidas virtuales?",
            selected: false,
            answer:{
                yes:5,
                maybe:6,
                not:2
            }
          },
          {
            question:"¿Te gustaría que una opción de cita médica rápida tuviera características específicas?",
            selected: false,
            answer:{
                yes:9,
                maybe:3,
                not:1
            }
          },
          {
            question:"¿Te gustaría recibir notificaciones de citas médicas y resultados a través de una aplicación o servicio?",
            selected: false,
            answer:{
                yes:11,
                maybe:2,
                not:0
            }
          },
          {
            question:"¿Hay algún otro problema relacionado con la organización de citas médicas y resultados que te gustaría resolver con un servicio como el SAAS propuesto?",
            selected: false,
            answer:{
                yes:13,
                maybe:0,
                not:0
            }
          }
        ]}
    />
    <Persona
        title="Perfiles de usuario"
        data="Basándose en los resultados de la investigación, se crearon los siguientes perfiles de usuario:"
        person={[
          {
            photoLink:"/image/pick-1.png",
            data:"Pacientes con enfermedades crónicas: personas que requieren un seguimiento médico constante y necesitan un servicio que les permita coordinar sus citas y enviar resultados médicos de manera efectiva."
          },
          {
            photoLink:"/image/pick-2.png",
            data:"Personas con un estilo de vida ocupado: personas que tienen una agenda ocupada y buscan una herramienta que les permita coordinar sus citas médicas de manera efectiva y eficiente."
          },
          {
            photoLink:"/image/pick-3.png",
            data:"Doctores qué necesitan ayudar en su proceso de digitalizar su negocio y carrera."
          }
        ]}
    />
        {/* 
    data: string,
    mapsArray: {
        title: string,
        dataArray: {
            name: string,
            data: string[]
        }[]
    }[] */}
    <ExperienceMap
      title="Mapas de experiencia"
      data="Se crearon mapas de experiencia para cada uno de los perfiles de usuario, mostrando los diferentes puntos de contacto que los usuarios tendrían con el servicio SAAS. Se incluyeron elementos como la creación de citas, la gestión de resultados médicos y la comunicación con el médico."
      mapsArray={[
        {
          title:"Offline process: General",
          dataArray:[
            {
              name:"Homepage",
              data:[
                "Chat list",
                "Doctor recommend"
              ]
            },
            {
              name:"Create meet",
              data:[
                "Create account process",
                "Create meet process"
              ]
            },
            {
              name:"Fast meet",
              data:[
                "Create account process",
                "Create fast meet process"
              ]
            },
            {
              name:"Send medical result",
              data:[
                "Create account process",
                "Create Send medical result process"
              ]
            },
            {
              name:"Login / Sing up",
            }
          ]
        },
        {
          title:"Online process: General",
          dataArray:[
            {
              name:"Login / Sing up",
            },
            {
              name:"Homepage",
              data:[
                "Doctor recommend",
                "Active chat",
                "Historical",
                "Notification",
                "Chat bot",
              ]
            },
            {
              name:"Create meet",
              data:[
                "Create meet process"
              ]
            },
            {
              name:"Fast meet",
              data:[
                "Create fast meet process"
              ]
            },
            {
              name:"Send medical result",
              data:[
                "Create Send medical result process"
              ]
            }
          ]
        },
        {
          title:"Offline process: Meets",
          dataArray:[
            {
              name:"#1 = Info Date",
              data:[
                "Choose a Doctor",
                "Choose Date",
                "Choose Time"
              ]
            },
            {
              name:"#2 = Info Pacient",
              data:[
                "Previous info chooses",
                "Provide: Name, Telephone, Email, DNI, Message"
              ]
            },
            {
              name:"#3 = Payment",
              data:[
                "Previous info chooses",
                "Add payment method"
              ]
            },
            {
              name:"#4 = Done",
              data:[
                "Login automate",
                "Create patient account",
                "Create meet and chat meet"
              ]
            }
          ]
        },
        {
          title:"Online process: Meets",
          dataArray:[
            {
              name:"#1 = Info Date",
              data:[
                "Choose Date",
                "Choose Time"
              ]
            },
            {
              name:"#2 = Payment",
              data:[
                "Previous info chooses",
                "Add payment method"
              ]
            },
            {
              name:"#4 = Done",
              data:[
                "Create meet and chat meet"
              ]
            }
          ]
        },
        {
          title:"Offline process: Fast Meets",
          dataArray:[
            {
              name:"#1 = Info Date",
              data:[
                "Choose a Doctor",
                "Choose Time",
                "Provide: Name, Telephone, Email, DNI, Message"
              ]
            },
            {
              name:"#3 = Payment",
              data:[
                "Previous info chooses",
                "Add payment method"
              ]
            },
            {
              name:"#4 = Done",
              data:[
                "Login automate",
                "Create patient account",
                "Create meet and chat meet"
              ]
            }
          ]
        },
        {
          title:"Online process: Fast Meets",
          dataArray:[
            {
              name:"#1 = Info Date",
              data:[
                "Write Message",
                "Choose Time"
              ]
            },
            {
              name:"#2 = Payment",
              data:[
                "Previous info chooses",
                "Add payment method"
              ]
            },
            {
              name:"#4 = Done",
              data:[
                "Create meet and chat meet"
              ]
            }
          ]
        },
        {
          title:"Offline process: Send Results",
          dataArray:[
            {
              name:"#1 = Info Date",
              data:[
                "Choose a Doctor",
                "Upload Document",
                "Provide: Name, Telephone, Email, DNI, Message"
              ]
            },
            {
              name:"#3 = Payment",
              data:[
                "Previous info chooses",
                "Add payment method"
              ]
            },
            {
              name:"#4 = Done",
              data:[
                "Login automate",
                "Create patient account",
                "Create meet and chat meet"
              ]
            }
          ]
        },
        {
          title:"Process: Create account",
          howManyColumns: 2,
          dataArray:[
            {
              name:"#1 = Choose type account",
            },
            {
              name:"#2 = Doctor",
            },
            {
              name:"#2 = Paciente",
            },
            {
              name:"#3 = Write",
              data:[
                "Name",
                "Email",
                "DNI",
                "Password",
                "Telephone",
                "Specialist",
                "Labor Date and time"
              ]
            },
            {
              name:"#3 = Write",
              data:[
                "Name",
                "Email",
                "DNI",
                "Password",
                "Telephone"
              ]
            },
            {
              name:"#4 = Done",
            },
            {
              name:"#4 = Done",
            }
          ]
        },
      ]}
    />
    <DbaModel
      title="DBA Model"
      imageData={{
        src:"/image/dba.png",
        alt: "DBA Model image",
        width: 1177.82,
        height: 424
      }}
    />
    <GalleryComponent
      title="Mapas de experiencia"
      data="Se crearon mapas de experiencia para cada uno de los perfiles de usuario, mostrando los diferentes puntos de contacto que los usuarios tendrían con el servicio SAAS. Se incluyeron elementos como la creación de citas, la gestión de resultados médicos y la comunicación con el médico."
      imageArray={[
        {
          imageLink: "/image/sketch/Feelit-02.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-03.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-04.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-05.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-06.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-07.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-10.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-11.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-12.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-13.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-14.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-15.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/sketch/Feelit-16.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        }
      ]}
    />
    <GalleryComponent
      title="Prototipos de soluciones para paciente"
      data="Se crearon prototipos de soluciones para abordar los problemas identificados y mejorar la experiencia del usuario. Estos incluyeron un servicio SAAS que permite la gestión de citas médicas, la comunicación con el médico y la entrega de resultados médicos de manera efectiva. El servicio también incluyó opciones para agendar citas médicas rápidas virtuales o presenciales de 5 minutos."
      imageArray={[
        {
          imageLink: "/image/mockup/paciente/mockup-01.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-02.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-03.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-04.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-05.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-06.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-07.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-08.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-09.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-10.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-11.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-12.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-13.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-14.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-15.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-16.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-17.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-18.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-19.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-20.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-21.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-22.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-23.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-24.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-25.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-26.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-27.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-28.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-29.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-30.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-31.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-32.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-33.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-34.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-35.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-36.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-37.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-38.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-39.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-40.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-41.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-42.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-43.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-44.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-45.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-46.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-47.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-48.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
      ]}
    />
    <GalleryComponent
      title="Prototipos de soluciones para doctores"
      imageArray={[
        {
          imageLink: "/image/mockup/doctor/mockup-01.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-02.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-03.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-04.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-05.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-06.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-07.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-08.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-09.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-10.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-11.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-12.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-13.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-14.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-15.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-16.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-17.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-18.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-19.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-20.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-21.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-22.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-23.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-24.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-25.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-26.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-27.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-28.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-29.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-30.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-31.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-32.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-33.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-34.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-35.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-36.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-37.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-38.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-39.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-40.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-41.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-42.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-43.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-44.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-45.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-46.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-47.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-48.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-49.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-50.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-51.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-52.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-53.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-54.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-55.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-56.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-57.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-58.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-59.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-60.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-61.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-62.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-63.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-64.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-65.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-66.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-67.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-68.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-69.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/doctor/mockup-70.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
      ]}
    />
    <GalleryComponent
      title="Pruebas de usabilidad"
      data="Se realizaron pruebas de usabilidad con usuarios reales para evaluar la eficacia de las soluciones propuestas. Los resultados de las pruebas indicaron que el servicio SAAS era fácil de usar y que los pacientes podían coordinar sus citas médicas y enviar resultados médicos de manera efectiva. Los usuarios también valoraron positivamente la opción de agendar citas rápidas virtuales o presenciales de 5 minutos."
      classOnlyShowImage="class-classOnlyShowImage"
      imageArray={[
        {
          imageLink: "/image/mockup/paciente/mockup-04.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-28.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        },
        {
          imageLink: "/image/mockup/paciente/mockup-36.png",
          imageAlt: "img",
          imageWidth: 305,
          imageHeight: 192
        }
      ]}
    />
    <Implement
      title="Implementación"
      data="Una vez validadas las soluciones, se implementan los cambios en el servicio SAAS. Se integró un sistema de gestión de citas médicas, entrega de resultados médicos y comunicación con el médico. También se agregó la opción de agendar citas rápidas virtuales o presenciales de 5 minutos."
      video="/image/doctor/Frame.png"
    />
    <NextStep
      title="Seguimiento"
      data="Se realizó un seguimiento de los cambios realizados para asegurarse de que estuvieran funcionando correctamente y de que la experiencia del usuario estuviera mejorando. Se recibió una retroalimentación muy positiva de los usuarios, quienes valoraron el servicio SAAS como una herramienta útil y fácil de usar para coordinar sus citas médicas y resultados, y para obtener citas rápidas con sus médicos."
      linkButtons={[
        {
          icon:"/image/icon/github.svg",
          link:"https://github.com/dulcevaleriana/feelit",
          name:"GitHub Front-end Repo"
        },
        {
          icon:"/image/icon/github.svg",
          link:"https://github.com/dulcevaleriana/Feelit-Back",
          name:"GitHub Back-end Repo"
        },
        {
          icon:"/image/icon/figma.svg",
          link:"https://www.figma.com/file/pqqMwgHfQ4NLZYh8dnKW3r/Feelit?type=design&node-id=179%3A609&t=fnPjFO9uwd0p7lPT-1",
          name:"Figma"
        },
      ]}
    />
        {/* message:string,
    socialMediaArray:{
        icon:string,
        link:string
    }[] */}
    <Footer
      message="Made with <3 by Dulce Valeriana"
      socialMediaArray={[
        {
          icon:"/image/icon/github.svg",
          link:"https://github.com/dulcevaleriana"
        },
        {
          icon:"/image/icon/linkedIn.svg",
          link:"https://www.linkedin.com/in/dulcevaleriana/"
        }
      ]}
    />
  </div>
}

export default Home;
