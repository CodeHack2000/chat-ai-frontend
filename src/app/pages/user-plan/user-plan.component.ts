import { Component, signal } from '@angular/core';
import { SecondaryTitleComponent } from "../../components/titles/secondary-title/secondary-title.component";
import { SidenavWithButtonComponent } from "../../components/menu/sidenav-with-button/sidenav-with-button.component";
import { PrimaryTitleComponent } from "../../components/titles/primary-title/primary-title.component";
import { PlanCardComponent } from "./plan-card/plan-card.component";
import { MainHeaderComponent } from "../../components/headers/main-header/main-header.component";

@Component({
  selector: 'app-user-plan',
  imports: [SecondaryTitleComponent, SidenavWithButtonComponent, PrimaryTitleComponent, PlanCardComponent, MainHeaderComponent],
  templateUrl: './user-plan.component.html',
  styleUrl: './user-plan.component.scss'
})
export class UserPlanComponent {

  freePlanTitle = signal('Gratuito');
  freePlanPrice = signal('0')
  freePlanDescription = signal('- Converse com o nosso bot de triagem médica sem limitações.\n- Receba conselhos profissionais sobre sintomas e tratamentos leves que podem ser feitos em casa.\n- Personalize seu perfil e veja recomendações de produtos de saúde, incluindo onde comprá-los e a que preço.\n- Além disso, o bot oferece dicas valiosas para melhorar seu bem-estar sem a necessidade de comprar produtos.');
  freePlanAdditionalInfo = signal('* Cada nova conversa não inclui o histórico de chats anteriores.');

  vipPlanTitle = signal('VIP');
  vipPlanPrice = signal('5')
  vipPlanDescription = signal('Visualize o histórico completo de todas as suas conversas com o bot, organizadas por data.\n- Revise todas as recomendações de produtos, preços e locais de compra a qualquer momento.\n- Aproveite uma experiência contínua e personalizada, mantendo o registro de todas as suas interações e conselhos recebidos.\n- Eleve seu cuidado com a saúde a um novo nível com o plano VIP!');
  vipPlanAdditionalInfo = signal('* Desbloqueie o plano VIP e tenha acesso a funcionalidades exclusivas!');

  email = signal('a18824@alunos.ipca.pt');
}
