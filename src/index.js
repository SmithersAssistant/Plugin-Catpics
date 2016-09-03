import React from 'react'

const CATPICS_COMPONENT = 'com.robinmalfait.catpics'

export default robot => {

  const {Images} = robot.cards

  const Catpics = ({images, ...other}) => {
    return (
      <Images
        {...other}
        title='Random Cat Pictures'
        images={images}
      />
    )
  }
  

  robot.registerComponent(Catpics, CATPICS_COMPONENT);

  const spawnPics = (count = 15) => {
    var images = []

    for (var i = 0; i < count; i++) {
        images.push({
            title: `Cat Picture ${i + 1}`,
            src: `http://thecatapi.com/api/images/get?format=src&type=gif&time=${+new Date}-${i}`
        })
    }

    robot.addCard(CATPICS_COMPONENT, {images})
  }

  robot.listen(/^catpics$/, {
    description: "Show some a cat pic!",
    usage: 'catpics'
  }, () => {
    spawnPics(15)
  })

  robot.listen(/^catpics (.*)$/, {
    description: "Show some a cat pic!",
    usage: 'catpics <number>'
  }, (res) => {
    spawnPics(res.matches.number)
  })
}
