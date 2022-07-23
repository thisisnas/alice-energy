import React from 'react'
import '../styles/about.scss'
import Title from './content/Title'
import Section from './content/Section'
import hp1 from '../hp1.jpg'
import hp2 from '../hp2.jpg'
import hp3 from '../hp3.jpg'

const About = () => {
  return (
    <>
      <Title />

      <div className='description'>
        <h1> Pourquoi une pompe a chaleur pourras changer votre vie?</h1>
        <Section
          text='Les études montrent qu’une pompe à chaleur est économique. Son
        installation coute en général entre 5000€ et 11000 €, avec une
        économie d’énergie de 35% sur votre facture d’électricité, le retour
        sur investissement est généralement autour de 10 ans seulement. La
        question légitime que l’on peut se poser c’est comment une telle
        économie peut être réalisée ? En effet, les pompes à chaleur utilisent
        des ressources qui sont considérées comme gratuites et illimite pour
        fonctionner et utilisent très peu d ’énergie dite conventionnelle. Donc
        même avec un investissement de départ qui peut être important (sans
        compter les aides) le retour sur investissement se ressent très vite
        grâce aux économies d’énergie importante réaliser.'
          picture={hp1}
        />
        <Section
          text='Un autre type de question que l’on nous pose concernent l’impact
          écologique, l’empreinte carbone que laissent nos pompes à chaleur.
          Alors, oui la pompe à chaleur est écologique ! Pour produire de
          l’énergie, selon le type choisi, une pompe à chaleur utilisera la
          chaleur presente dans l’air, l’eau ou le sol. Ainsi l’utilisation
          d’énergie fossile s’en retrouve limitée ! Comme elle n’utilise pas
          directement le gaz ou le fioul, les rejets en CO2 et autres gaz a
          effet de serre s’en retrouvent limités par rapport à une chaudière
          classique par exemple. Néanmoins tout n’est pas parfait et pour capter
          la chaleur ces pompes utilisent des fluides frigorigènes qui
          favorisent l’effet de serre, mais les nouvelles réglementations
          limitent l’utilisation de ces fluides et les nouveaux modèles
          commercialisent sont plus écologique que ceux pressentent sur le
          marché il y a quelques années.'
          picture={hp2}
          intervert='true'
        />
        <Section
          text={
            <>
              <p>
                Les aides existantes pour financer les travaux d’installation de
                votre pompe à chaleur sont multiples et peuvent selon certains
                êtres complètement couverts. Selon votre profilé vous pouvez en
                effet bénéficier de reductions significatives ! Elles se
                traduisent par des aides ou des reductions d’impôts, en voici
                certaines :
              </p>
              <p>
                <li className='test'>
                  <strong>MaPrimeRénov'</strong> est une prime s’adressant à
                  tous les ménages, elle est calculée en fonction du gain
                  écologique et du revenu du ménage.
                </li>
                <li>
                  <strong></strong>
                  <strong>MaPrimeRénov' sérénité</strong> est une aide
                  fusionnant « Habiter mieux sérénité » et de MaPrimeRénov',
                  elle permet aux ménages les plus modestes d’avoir une aide et
                  des conseils concernant leurs travaux.
                </li>
                <li>
                  {' '}
                  Si vous rénovez votre logement, certains travaux peuvent
                  bénéficier d'une <strong>TVA à taux réduit à 5,5 %</strong>.
                </li>
                <li>
                  {' '}
                  <strong>Éco-prêt à taux zéro</strong> est un prêt à taux zéro
                  allant jusqu’à 50 000€ et concernant les rénovations
                  énergétiques
                </li>
              </p>
            </>
          }
          picture={hp3}
        />
      </div>
    </>
  )
}

export default About
