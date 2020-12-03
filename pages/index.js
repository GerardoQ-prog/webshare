import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookShareCount,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import {InlineShareButtons} from 'sharethis-reactjs';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

export default function Home() {

  const shareUrl = "facebook.com"

  const [image, setimage] = useState(null)

  const handleImage= (e) =>{
    setimage(e.target.files[0])
  }

  const name ="Gerardo"
  const handleShare = () =>{
    

  //   if ('share' in navigator) {
  //     navigator.share({
  //       title: 'Probando Share API',
  //       text: 'Suscríbete a Youtube.com/LeonidasEsteban',
  //       url: './thumb.jpg',
  //     })
  //     .then(()=>{
  //       alert('hemos logrado compartir')
  //     })
  //     .catch(()=>{
  //       alert('no se pudo compartir, prueba usando https en un navegador móvil')
  //     })

  // } else {
  //   alert('No está disponible el API de web share')
  // }

        const file_input = document.querySelector('#file_input');

        const title = 'HOLAAAA'
        const text = 'GERARDO'
        const url = 'https://regalistos.pe'
        const files = file_input.disabled ? undefined : file_input.files;


        if('share' in navigator){
          navigator.share({files, title, text, url})
          .then(() => alert('Share was successful.'))
          .catch((error) => alert('Sharing failed', error));
        }else{
          alert('mobile')
        }
       
      
 
}

  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.example.com/page",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url:
                "https://storage.googleapis.com/regalistos-22875.appspot.com/meetings/card/.jpg?GoogleAccessId=firebase-adminsdk-ctl6y%40regalistos-22875.iam.gserviceaccount.com&Expires=2556057600&Signature=LhJj5ddWDvzBXtOQ9v56ISQSJz9I0QSujAeRSTQBbPq2vsg1KZd2364lJlT1ygXeLweJuAT0pTryLYCwUQa3sjdpP00CfkkdpB%2F6ErhrPvrVrwlu30kINFqBz%2B7sXMXZLrSRM755N7XxnSKyRU5IyKGMZKdbatn5tM7zhtKJXXJCMZqR8kjfRbhccNktlnVJfgH%2Fh%2Fx4thYQbPQWsuhn%2F0hLmSYPDxhq1tlvmuuemvQLcAYGOl90bdLxeaPqEcqcYl467l1SsJLoabsSgRV96JjaPGm0qAoMvu5qcxMTH4szHTwTF76rJU0b%2FtjOJeY0aQOv5qORfJJjH8eT3OWTcw%3D%3D",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-2.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt 2",
            },
          ],
        }}
      />
      <div className={styles.container}>
        <main className={styles.main}>
          hello :v
          <div>
            <style
              dangerouslySetInnerHTML={{
                __html: `
          html, body {
            margin: 0;
            padding: 0;
            text-align: center;
          }
          h1 {
            font-size: 24px;
            font-weight: bold;
          }
          hr {
            margin-bottom: 40px;
            margin-top: 40px;
            width: 50%;
          }
        `,
              }}
            />
          {/* <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'null',        // button labels (cta, counts, null)
            language: 'es',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'facebook',
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            // show_total: true,
            size: 40,             // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            // url: `¡Feliz Cumpleaños ${name}! Te invitamos a la fiesta de este niño , revisa la invitacion y la lista de regalos en https://regalistos.pe`, // (defaults to current url)
            url:'https://regalistos.pe',
            image: 'https://storage.googleapis.com/regalistos-22875.appspot.com/meetings/card/.jpg?GoogleAccessId=firebase-adminsdk-ctl6y%40regalistos-22875.iam.gserviceaccount.com&Expires=2556057600&Signature=LhJj5ddWDvzBXtOQ9v56ISQSJz9I0QSujAeRSTQBbPq2vsg1KZd2364lJlT1ygXeLweJuAT0pTryLYCwUQa3sjdpP00CfkkdpB%2F6ErhrPvrVrwlu30kINFqBz%2B7sXMXZLrSRM755N7XxnSKyRU5IyKGMZKdbatn5tM7zhtKJXXJCMZqR8kjfRbhccNktlnVJfgH%2Fh%2Fx4thYQbPQWsuhn%2F0hLmSYPDxhq1tlvmuuemvQLcAYGOl90bdLxeaPqEcqcYl467l1SsJLoabsSgRV96JjaPGm0qAoMvu5qcxMTH4szHTwTF76rJU0b%2FtjOJeY0aQOv5qORfJJjH8eT3OWTcw%3D%3D',  // (defaults to og:image or twitter:image)
            description: 'custom title',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)
          }}
        />
        <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'null',        // button labels (cta, counts, null)
            language: 'es',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'whatsapp',
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            // show_total: true,
            size: 40,             // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url: `¡Feliz Cumpleaños ${name}! Te invitamos a la fiesta de este niño , revisa la invitacion y la lista de regalos en https://regalistos.pe`, 
            image,// (defaults to current url)
            // url:'https://regalistos.pe',
            // image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom title',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)
          }}
        /> */}
          <h1>Compartir</h1>
          </div>
          <input type="file" onChange={handleImage} id="file_input"></input>
          <button onClick={handleShare}>Compartir</button>
        </main>
      </div>
    </>
  );
}
