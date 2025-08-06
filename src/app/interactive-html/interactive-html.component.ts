import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-interactive-html',
  imports: [],
  templateUrl: './interactive-html.component.html',
  standalone: true,
  styleUrl: './interactive-html.component.scss'
})
export class InteractiveHtmlComponent implements OnChanges{
  @Input() html: string = '';
  @Output() showMeaning = new EventEmitter<string>();

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['html']) {
      this.renderContent();
    }
  }

  renderContent() {
    if (!this.html) {
      console.warn("HTML content is undefined or empty");
      return;
    }
    const regex = /#\{(.*?)\|(.*?)}#/g;
    console.log(this.html);
    try {
      const parsed = this.html.replace(regex, (_m, key, value) => {
        return `<span class="clickable" data-meaning="${value.trim()}">${key.trim()}</span>`;
      });

      const container = this.elRef.nativeElement.querySelector('.interactive-container');
      container.innerHTML = parsed;

      const words = container.querySelectorAll('.clickable');
      words.forEach((el: any) => {
        this.renderer.listen(el, 'click', () => {
          const meaning = el.getAttribute('data-meaning');
          this.showMeaning.emit(meaning);
        });
      });
    } catch (error) {
      console.error("Error while rendering HTML content:", error);
    }
  }
}
