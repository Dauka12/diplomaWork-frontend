import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import * as React from 'react';

const userTestimonials = [
  {
    avatar: <Avatar alt="Elena Patel" src="/static/images/avatar/1.jpg" />,
    name: 'Elena Patel',
    occupation: 'Neurologist',
    testimonial:
      "I'm impressed by the adaptability of this product in medical settings. Whether I'm handling patient records or conducting research, it seamlessly adjusts to my needs. Its intuitive interface has truly enhanced my daily workflow, making tasks more efficient and enjoyable.",
  },
  {
    avatar: <Avatar alt="Brandon Nguyen" src="/static/images/avatar/2.jpg" />,
    name: 'Brandon Nguyen',
    occupation: 'Cardiologist',
    testimonial:
      "The exceptional customer support provided for this product is outstanding. The team behind it has been prompt and immensely helpful. It's reassuring to know that they are dedicated to assisting medical professionals.",
  },
  {
    avatar: <Avatar alt="Olivia Kim" src="/static/images/avatar/3.jpg" />,
    name: 'Olivia Kim',
    occupation: 'Pediatrician',
    testimonial:
      'The simplicity and user-friendliness of this product have greatly simplified my medical practice. I commend the developers for delivering a solution that not only meets but exceeds the expectations of healthcare providers.',
  },
  {
    avatar: <Avatar alt="Santiago Rodriguez" src="/static/images/avatar/4.jpg" />,
    name: 'Santiago Rodriguez',
    occupation: 'Orthopedic Surgeon',
    testimonial:
      "I appreciate the meticulous attention to detail in the design of this product. The thoughtful enhancements make a significant impact, and it's evident that the developers prioritized delivering a premium tool for medical professionals.",
  },
  {
    avatar: <Avatar alt="Amelia Wong" src="/static/images/avatar/5.jpg" />,
    name: 'Amelia Wong',
    occupation: 'Oncologist',
    testimonial:
      "Having explored various medical software solutions, this one stands out for its innovative features tailored to healthcare needs. It's evident that the creators put considerable thought into crafting a solution that addresses the unique challenges faced by medical practitioners.",
  },
  {
    avatar: <Avatar alt="Lucas Martinez" src="/static/images/avatar/6.jpg" />,
    name: 'Lucas Martinez',
    occupation: 'Radiologist',
    testimonial:
      "The quality of this product surpassed my expectations. It's robust, well-designed, and engineered to endure the demands of medical environments. Without a doubt, it's a worthwhile investment for healthcare professionals.",
  },
];


const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <br />
        <Typography variant="body1" color="text.secondary">
          Explore the aspects our clients appreciate in our product line on our e-prescribing web platform.
          Witness our prowess in streamlining processes, ensuring longevity,
          and fulfilling customer needs. Engage with us for superior quality, groundbreaking innovation, and steadfast assistance.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}