import React from "react"
import styles from "../styles/Info.module.css"

const Info = ({ carouselSection }) => {
  return (
    <div className={styles.info_container} ref={carouselSection}>
      <h1 ref={carouselSection}>Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia erat tortor, eget
        auctor libero bibendum sit amet. Mauris ut eleifend sapien. Vivamus vitae posuere ipsum,
        vitae cursus nisi. Pellentesque lobortis pretium purus quis convallis. Nam vel ultrices
        nisl. Fusce id nisl a libero imperdiet facilisis. Donec faucibus, neque hendrerit
        scelerisque tincidunt, nibh erat varius velit, ornare faucibus erat nisl sit amet diam.
        Morbi mi turpis, venenatis vel mi vel, consectetur consectetur enim. Pellentesque id mi
        velit. Quisque libero ligula, semper quis vulputate ut, tincidunt sed magna. Donec vehicula
        lobortis purus, in consectetur leo pretium non. Nullam a vestibulum neque. Aliquam lobortis
        in augue nec sagittis.
      </p>

      <h2>Another Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia erat tortor, eget
        auctor libero bibendum sit amet. Mauris ut eleifend sapien. Vivamus vitae posuere ipsum,
        vitae cursus nisi. Pellentesque lobortis pretium purus quis convallis. Nam vel ultrices
        nisl. Fusce id nisl a libero imperdiet facilisis. Donec faucibus, neque hendrerit
        scelerisque tincidunt, nibh erat varius velit, ornare faucibus erat nisl sit amet diam.
        Morbi mi turpis, venenatis vel mi vel, consectetur consectetur enim. Pellentesque id mi
        velit. Quisque libero ligula, semper quis vulputate ut, tincidunt sed magna. Donec vehicula
        lobortis purus, in consectetur leo pretium non. Nullam a vestibulum neque. Aliquam lobortis
        in augue nec sagittis.
      </p>
      <h2>Another Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia erat tortor, eget
        auctor libero bibendum sit amet. Mauris ut eleifend sapien. Vivamus vitae posuere ipsum,
        vitae cursus nisi. Pellentesque lobortis pretium purus quis convallis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia erat tortor, eget
        auctor libero bibendum sit amet. Mauris ut eleifend sapien.
      </p>
      <h2>Another Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia erat tortor, eget
        auctor libero bibendum sit amet. Mauris ut eleifend sapien. Vivamus vitae posuere ipsum,
        vitae cursus nisi. Pellentesque lobortis pretium purus quis convallis. Nam vel ultrices
        nisl. Fusce id nisl a libero imperdiet facilisis.
      </p>
    </div>
  )
}

export default Info
