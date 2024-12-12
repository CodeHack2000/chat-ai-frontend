import { Component, input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-plan-card',
  imports: [
    MatCardModule
  ],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.scss'
})
export class PlanCardComponent {

  title = input('Gratuito');
  price = input('0')
  description = input('- Converse com o nosso bot de triagem médica sem limitações.\n- Receba conselhos profissionais sobre sintomas e tratamentos leves que podem ser feitos em casa.\n- Personalize seu perfil e veja recomendações de produtos de saúde, incluindo onde comprá-los e a que preço.\n- Além disso, o bot oferece dicas valiosas para melhorar seu bem-estar sem a necessidade de comprar produtos.');
  additionalInfo = input('*Nota: Cada nova conversa não inclui o histórico de chats anteriores.');
  animation = input('');
}
