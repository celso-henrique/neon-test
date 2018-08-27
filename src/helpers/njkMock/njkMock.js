module.exports = {
  render: jest.fn(
    () => `
    <div class="skipToContent">
      <div class="grid-container fluid">
        <a class="show-on-focus skipToContent__link" href="#content">Pular para o conteúdo</a>
      </div>
    </div>
    <header class="header">
      <div class="grid-container fluid">
        <h1 class="header__logo"><span class="show-for-sr">Neon</span></h1>
        <h2 class="header__balance"><strong>saldo R$1000</strong></h2>
      </div>
    </header>
    <section class="content" id="content">
      <div class="grid-container fluid">
        <p class="content__date"><strong>{{year}}</strong></p>
        <p class="content__welcome"><strong>Bem-vindo</strong></p>
      </div>
      <div class="carousel">
        <div class="carousel__content">
          <div class="carousel__slide">
            <a class="carousel__deleteButton" title="Apagar este item" aria-label="Apagar este item"><span class="show-for-sr">Apagar</span></a>
          </div>
          <div class="carousel__slide">
            <a class="carousel__deleteButton" title="Apagar este item" aria-label="Apagar este item"><span class="show-for-sr">Apagar</span></a>
          </div>
        </div>
        <ul class="carousel__bullets">
          <li class="carousel__bulletItem">
            <a aria-label="Mudar para o item 1" title="Mudar para o item 1" class="carousel__bullet">
              <span class="show-for-sr">Mudar para o item 1</span>
            </a>
          </li>
          <li class="carousel__bulletItem">
            <a aria-label="Mudar para o item 2" title="Mudar para o item 2" class="carousel__bullet">
              <span class="show-for-sr">Mudar para o item 2</span>
            </a>
          </li>
        </ul>
      </div>
    </section>`
  )
};
