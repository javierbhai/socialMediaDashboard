import { useState } from 'react'
import { Grid, Container } from '@material-ui/core';

import Header from '../../pattern/Molecules/Header'
import Switch from "../../pattern/Molecules/Switch";
import SocialMediaHighlight from '../../pattern/Molecules/SocialMediaHighlight'
import Section from '../../pattern/Atoms/Section'
import SectionTitle from '../../pattern/Atoms/SectionTitle'
import SocialMediaDaily from '../../pattern/Molecules/SocialMediaDaily'
import {Wrapper, Backer, Fonter} from './Home.styled';


const Home = props => {
  const [checked, setChecked] = useState(true);

  const handleChange = e => {
    setChecked(!checked);
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
        props.setTheme("light");
    }
  };

  return (
  <Wrapper>
    <Container fixed>
      <Header
        title={'Social Media Dashboard'}
        subTitle={'Total Followers: 23,004'}
        mode={
          <Switch
            checked={checked}
            onChange={handleChange}
            name="checkedB"
          />
        }
      />
      <Section>
        <Grid container spacing={2} >
            <Grid item md={3} xs={6}>
              <SocialMediaHighlight
                userName='@nathanf'
                network='facebook'
                number='1987'
                upDown='up'
                value='12 Today'
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <SocialMediaHighlight
                userName='@nathanf'
                network='twitter'
                number='1944'
                upDown='up'
                value='99 Today'
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <SocialMediaHighlight
                userName='@realnathanf'
                network='instagram'
                number='11K'
                upDown='up'
                value='1099 Today'
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <SocialMediaHighlight
                userName='Nathan F.'
                network='youtube'
                number='8239'
                upDown='down'
                value='144 Today'
              />
            </Grid>
        </Grid>
      </Section>
      <Section>
        <SectionTitle>Overview - Today</SectionTitle>
        <Grid container spacing={2} >
          <Grid item md={3} sm={6} xs={12}>
            <SocialMediaDaily />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <SocialMediaDaily />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <SocialMediaDaily />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <SocialMediaDaily />
          </Grid>
        </Grid>
      </Section>
    </Container>
    <Fonter />
    <Backer />
  </Wrapper>
  );
}

export default Home
