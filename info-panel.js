const infoPanel = document.getElementById("info-panel");
infoPanel.innerHTML = `
  <div class="info"></div>
  <div class="dice">
    <div class="roll-dice-title">ROLL DICE</div>
    <div class="play-dice">
  
      <div class="one">
        <div class="black-circle"></div>
      </div>

      <div class="two">
        <div class="black-circle" id="two-top"></div>
        <div class="black-circle" id="two-bottom"></div>
      </div>

      <div class="three">
        <div class="black-circle" id="three-top"></div>
        <div class="black-circle" id="three-middle"></div>
        <div class="black-circle" id="three-bottom"></div>
      </div>

      <div class="four">
        <div class="four-row">
          <div class="black-circle"></div>
          <div class="black-circle"></div>
        </div>
        <div class="four-row">
          <div class="black-circle"></div>
          <div class="black-circle"></div>
        </div>
      </div>

      <div class="five">
        <div class="five-row">
          <div class="black-circle"></div>
          <div class="black-circle"></div>
        </div>
        <div class="five-row">
          <div class="black-circle"></div>
        </div>
        <div class="five-row">
          <div class="black-circle"></div>
          <div class="black-circle"></div>
        </div>
      </div>

      <div class="six">
        <div class="six-row">
          <div class="black-circle"></div>
          <div class="black-circle"></div>
        </div>
         <div class="six-row">
          <div class="black-circle"></div>
          <div class="black-circle"></div>
        </div>
         <div class="six-row">
          <div class="black-circle"></div>
          <div class="black-circle"></div>
        </div>
      </div>

    </div>
  </div>

`;
