import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import {useRouter} from 'next/router';
import appConfig from '../config.json';
import React from 'react';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag} {
        color: ${appConfig.theme.colors.neutrals['100']};
        font-size: 24px;
        font-weight: 600;
      }
    `}</style>
    </>
  );
}

// componente react
//function HomePage() {
//   // JSX
//    return (
//        <div>
//          <GlobalStyle />
//         <Titulo tag="h2" >Boas Vindas!!</Titulo>
//          <h2>Discord - Alura Matrix</h2>
//          
//       </div>
//   )
//  }
//export default HomePage

export default function PaginaInicial() {
  // const username = 'lucrodrigues';
      const [username, setUsername] = React.useState('');
      const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://i.kym-cdn.com/photos/images/original/001/315/787/15c.gif)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0px 10px 8px 8px rgb(0 0 0 / 40%)',
            backgroundColor: appConfig.theme.colors.neutrals[0],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit = {function (infosDoEvento) {
              infosDoEvento.preventDefault()
              roteamento.push('/chat');
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Ei, rapaz!</Titulo>
            <Text variant="body3" styleSheet={{ 
              marginBottom: '32px', 
              color: appConfig.theme.colors.neutrals[100] }}>
              {appConfig.name}
            </Text>
              
            {/*<input
                type="text"
                value={username}
                onChange={function (evento) {
                  // Onde ta o valor?
                  const valor = event.target.value;
                  // Trocar o valor da variavel
                  // através do React e avise quem precisa
                  setUsername(valor);
                }}
              /> */}

            <TextField
               value={username}
               onChange={function (evento) {
                 // Onde ta o valor?
                 const valor = event.target.value;
                 // Trocar o valor da variavel
                 // através do React e avise quem precisa
                 setUsername(valor);
                 }}
              fullWidth
              placeholder='user do github'
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[400],
                mainColorLight: appConfig.theme.colors.primary[100],
                mainColorStrong: appConfig.theme.colors.primary[100],
              }}
              onClick={function noRefCheck(){}}
              size="xl"
              variant="secondary"
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[0],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[100],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={username.length > 2 ? `https://github.com/${username}.png`: 'https://res.cloudinary.com/practicaldev/image/fetch/s--LJoiIpbz--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://thepracticaldev.s3.amazonaws.com/i/lol25tlqcayxwfg7hkec.png'}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username.length > 2 ? username: 'Digite um nome!'}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}