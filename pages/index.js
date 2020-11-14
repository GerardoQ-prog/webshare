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

export default function Home() {

  const shareUrl = "facebook.com"

  const [image, setimage] = useState(null)

  const handleImage= (e) =>{
    setimage(e.target.files[0])
  }

  const handleShare = () =>{
    




    if ('share' in navigator) {
      if (navigator.canShare && navigator.canShare({ files: image })) {
        navigator.share({
          files: image,
          title: 'Pictures',
          text: 'Our Pictures.',
        })
        .then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
      } else {
        alert(`Your system doesn't support sharing files.`);
      }
    }
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={styles.main}>
        hello :v
        {/* <WhatsappShareButton title="a" url="facebook.com"></WhatsappShareButton>
        <FacebookShareCount url={shareUrl}>
        {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
      </FacebookShareCount> */}


<div>
        <style dangerouslySetInnerHTML={{__html: `
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
        `}} />

        <h1>Compartir</h1>
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
              'facebook',
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            // show_total: true,
            size: 40,             // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url: 'https://regalistos.pe', // (defaults to current url)
            og: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'sadsadsadsad',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)
          }}
        />
        </div>
        <input type="file" onChange={handleImage}></input>
        <button onClick={handleShare}>Compartir</button>

      </main>
    </div>
  )
}
