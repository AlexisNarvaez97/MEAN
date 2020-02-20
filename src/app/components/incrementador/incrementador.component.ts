import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styleUrls: ["./incrementador.component.css"]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild("txtProgress") txtProgress: ElementRef;

  @Input() leyenda: string = "Leyenda";

  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChanges(event: number) {

    // const elemHTML: any = document.getElementsByName("progreso")[0];
    // console.log(elemHTML.value);

    console.log(this.txtProgress);

    console.log(event);

    if (event >= 100) {
      this.porcentaje = 100;
    } else if (event <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = event;
    }

    this.txtProgress.nativeElement.value = this.porcentaje;

    // elemHTML.value = Number(this.porcentaje);

    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();
  }

  cambiarValor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);
  }
}
