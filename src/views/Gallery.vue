<template>
  <section class="gallery">
    <div class="container gallery__container">
      <h1 class="gallery__head">Участвуй в творческом конкурсе от St-Remy</h1>
      <p class="gallery__text">Поделись своей историей дружбы! Размещай свои и голосуй за понравившиеся работы участников с 01 октября до 30 ноября 2018 г.</p>
      <ul class="gallery__list">
        <li class="gallery__item"> <!-- Начало итема -->
          <div class="gallery__image" @click="showStory">
            <img src="@/assets/images/gallery-01.jpg" alt="before image">
            <img src="@/assets/images/gallery-02.jpg" alt="after image">
          </div>
          <span class="gallery__date">1995/2015</span>
          <b class="gallery__author">Константинопольский Пантелеймон</b>
          <div class="gallery__box1">
            <div class="gallery__share">
              <ul class="gallery__social">
                <li><a class="social-link social-link--ok social-link--mr15" title="Одноклассники" href="">ok.ru</a></li>
                <li><a class="social-link social-link--vk" title="Вконтакте" href="">vk.com</a></li>
              </ul>
            </div>
          </div>
          <Button class="gallery__btn">
            Проголосовать
            <svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z"/></g><g><path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/></g></svg>
            <span class="gallery__likes">1800</span>
          </Button>
        </li> <!-- Конец итема -->
        <li class="gallery__item"> <!-- Начало итема -->
          <div class="gallery__image" @click="showStory">
            <img src="@/assets/images/gallery-02.jpg" alt="before image">
            <img src="@/assets/images/gallery-03.jpg" alt="after image">
          </div>
          <span class="gallery__date">1995/2015</span>
          <b class="gallery__author">Константинопольский Пантелеймон</b>
          <div class="gallery__box1">
            <div class="gallery__share">
              <ul class="gallery__social">
                <li><a class="social-link social-link--ok social-link--mr15" title="Одноклассники" href="">ok.ru</a></li>
                <li><a class="social-link social-link--vk" title="Вконтакте" href="">vk.com</a></li>
              </ul>
            </div>
          </div>
          <button class="btn gallery__btn">
            Проголосовать
            <svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z"/></g><g><path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/></g></svg>
            <span class="gallery__likes">1800</span>
          </button>
        </li> <!-- Конец итема -->
        <li class="gallery__item"> <!-- Начало итема -->
          <div class="gallery__image" @click="showStory">
            <img src="@/assets/images/gallery-03.jpg" alt="before image">
            <img src="@/assets/images/gallery-04.jpg" alt="after image">
          </div>
          <span class="gallery__date">1995/2015</span>
          <b class="gallery__author">Константинопольский Пантелеймон</b>
          <div class="gallery__box1">
            <div class="gallery__share">
              <ul class="gallery__social">
                <li><a class="social-link social-link--ok social-link--mr15" title="Одноклассники" href="">ok.ru</a></li>
                <li><a class="social-link social-link--vk" title="Вконтакте" href="">vk.com</a></li>
              </ul>
            </div>
          </div>
          <button class="btn gallery__btn">
            Проголосовать
            <svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z"/></g><g><path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/></g></svg>
            <span class="gallery__likes">1800</span>
          </button>
        </li> <!-- Конец итема -->
        <li class="gallery__item"> <!-- Начало итема -->
          <div class="gallery__image" @click="showStory">
            <img src="@/assets/images/gallery-04.jpg" alt="before image">
            <img src="@/assets/images/gallery-01.jpg" alt="after image">
          </div>
          <span class="gallery__date">1995/2015</span>
          <b class="gallery__author">Константинопольский Пантелеймон</b>
          <div class="gallery__box1">
            <div class="gallery__share">
              <ul class="gallery__social">
                <li><a class="social-link social-link--ok social-link--mr15" title="Одноклассники" href="">ok.ru</a></li>
                <li><a class="social-link social-link--vk" title="Вконтакте" href="">vk.com</a></li>
              </ul>
            </div>
          </div>
          <button class="btn gallery__btn">
            Проголосовать
            <svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z"/></g><g><path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/></g></svg>
            <span class="gallery__likes">1800</span>
          </button>
        </li> <!-- Конец итема -->
        <li class="gallery__item"> <!-- Начало итема -->
          <div class="gallery__image" @click="showStory">
            <img src="@/assets/images/gallery-01.jpg" alt="before image">
            <img src="@/assets/images/gallery-03.jpg" alt="after image">
          </div>
          <span class="gallery__date">1995/2015</span>
          <b class="gallery__author">Константинопольский Пантелеймон</b>
          <div class="gallery__box1">
            <div class="gallery__share">
              <ul class="gallery__social">
                <li><a class="social-link social-link--ok social-link--mr15" title="Одноклассники" href="">ok.ru</a></li>
                <li><a class="social-link social-link--vk" title="Вконтакте" href="">vk.com</a></li>
              </ul>
            </div>
          </div>
          <button class="btn gallery__btn">
            Проголосовать
            <svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z"/></g><g><path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/></g></svg>
            <span class="gallery__likes">1800</span>
          </button>
        </li> <!-- Конец итема -->
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Gallery",
    methods: {
      showStory() {
        this.$store.dispatch("openModal", {
          type: "Story",
          data: {
            imgBefore: "https://cs12.pikabu.ru/post_img/2020/09/21/0/160063895715505179.webp",
            imgAfter: "https://cs10.pikabu.ru/post_img/2020/08/10/2/159702086118344152.jpg",
            okLink: "https://ok.ru",
            vkLink: "https://vk.com",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque fugiat fuga repellat fugit et hic vel, nihil voluptas quidem illum corrupti porro cumque corporis, numquam sint eius dicta quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque fugiat fuga repellat fugit et hic vel, nihil voluptas quidem illum corrupti porro cumque corporis, numquam sint eius dicta quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque fugiat fuga repellat fugit et hic vel, nihil voluptas quidem illum corrupti porro cumque corporis, numquam sint eius dicta quas.",
            author: "Константинопольский Пантелеймон",
            date: "2018/2018",
          },
        });
      },
    },
  }
</script>

<style lang="scss">
  .gallery {
    position: relative;
    z-index: 15;
    margin-top: 120px;
    &__head {
      font-size: 36px;
      font-family: "PT Serif", serif;
      font-weight: 700;
      color: #cbb073;
      text-align: center;
      margin-bottom: 25px;
    }
    &__text {
      max-width: 490px;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 50px;
    }
    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fill, 500px);
      grid-gap: 80px 50px;
      justify-content: center;
      margin-bottom: 100px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__image {
      width: 500px;
      height: 500px;
      border: 6px solid #cbb073;
      margin-bottom: 25px;
      line-height: 0;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        border: 6px solid #ffffff;
        filter: brightness(1.2);
      }
      img {
        width: 100%;
        height: 50%;
        object-fit: cover;
        &:first-child {
          border-bottom: 1px solid #ffffff;
        }
      }
    }
    &__date {
      font-size: 14px;
      margin-bottom: 10px;
    }
    &__author {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 26px;
      margin-bottom: 20px;
      text-align: center;
    }
    &__box1 {
      position: relative;
    }
    &__share {
      position: relative;
      width: 20px;
      height: 22px;
      background: url("../assets/images/share-icon.png") center no-repeat;
      margin-bottom: 20px;
      transition: all 0.2s ease;
      cursor: pointer;
      opacity: 1;
      &:hover {
        .gallery__social {
          opacity: 1;
        }
      }
    }
    &__social {
      padding: 5px;
      background-color: #000000;
      opacity: 0;
      transition: all 0.2s ease;
      position: absolute;
      display: flex;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &__btn {
      &:hover {
        svg {
          fill: #000000;
        }
      }
      svg {
        transition: all 0.2s ease;
        position: relative;
        top: 2px;
        width: 16px;
        height: 16px;
        fill: #ffffff;
        margin-left: 10px;
      }
    }
    &__likes {
      margin-left: 5px;
    }
  }
</style>


