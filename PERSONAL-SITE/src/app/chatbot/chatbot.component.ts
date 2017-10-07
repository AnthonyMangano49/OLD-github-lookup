import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  input;
  defaultMessage = {
    source: 'bot',
    message: 'Welcome to chatbot, enter a message to get started...'
  }
  currentChat = [
    {
      source: 'user',
      message: 'Living valley had silent eat merits esteem bed. In last an or went wise as left.'
    },    {
      source: 'user',
      message: 'Visited civilly am demesne so colonel he calling.'
    },    {
      source: 'bot',
      message: 'So unreserved do interested increasing sentiments. Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively. '
    },    {
      source: 'bot',
      message: 'Am terminated it excellence invitation projection as?'
    },    {
      source: 'user',
      message: 'Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown oh he common future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested simplicity at do projecting increasing terminated. As edward settle limits at in. Gay one the what walk then she.'
    },    {
      source: 'user',
      message: 'She graceful shy believed distance use nay.'
    },    {
      source: 'user',
      message: 'Lively is people so basket ladies window expect. Supply as so period it enough income he genius. Themselves acceptance bed sympathize get dissimilar way admiration son. Design for are edward regret met lovers. This are calm case roof and. '
    },    {
      source: 'bot',
      message: 'Guest it he tears aware as. Make my no cold of need.'
    },    {
      source: 'user',
      message: 'He been past in by my hard. Warmly thrown oh he common future.'
    },    {
      source: 'user',
      message: 'Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested simplicity at do projecting increasing terminated. As edward settle limits at in. '
    },    {
      source: 'bot',
      message: 'Gay one the what walk then she. Demesne mention promise you justice arrived way. Or increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye an. Mr unsatiable at literature connection favourable. We neglected mr perfectly continual dependent. '
    },    {
      source: 'bot',
      message: 'Now principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. All year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated. '
    },
  ];

  //todospagheti
  setMessageClass(source: string){
    return (source === 'user') ? 'user-message' : 'bot-message'; 
  }

  //todospagheti - emppty submit
  submitMessage() {
    if(this.input){
      this.currentChat.push({
        source: 'user',
        message: this.input
      })
      this.input = '';
    }
  }

}
 
 

  



