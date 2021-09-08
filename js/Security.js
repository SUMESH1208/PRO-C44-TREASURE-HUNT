class Security {

    constructor() {
           this.access1 = createInput("").attribute("placeholder", "Code 1");
           this.button1 = createButton('Check');

           this.access2 = createInput("").attribute("placeholder", "Code 2");
           this.button2 = createButton('Check');

           this.access3 = createInput("").attribute("placeholder", "Code 3");
           this.button3 = createButton('Check');


    }

    display(){
          
    this.access1.position(100,80);
    this.button1.position(100,110);

    this.access2.position(700,180);
    this.button2.position(700,210);
  
    this.access3.position(100,280);
    this.button3.position(100,310);

    this.button1.mousePressed(()=>{
      if(system.authenticate(accessCode1,this.access1.value())){
        this.access1.hide();
        this.button1.hide();
        score = score + 1;
      }  
    });

      this.button2.mousePressed(()=>{
        if(system.authenticate(accessCode2,this.access2.value())){
          this.access2.hide();
          this.button2.hide();
          score++;
        }  
      });

      this.button3.mousePressed(()=>{
        if(system.authenticate(accessCode3,this.access3.value())){
          this.access3.hide();
          this.button3.hide();
          score++;
        }  
      });

    }
}
