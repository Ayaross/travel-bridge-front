import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { ImageService } from './../service/imageService';

@Component({
  selector: 'app-id-verification',
  templateUrl: './id-verification.component.html',
  styleUrls: ['./id-verification.component.css']
})
export class IdVerificationComponent {
  public webcamImage: WebcamImage | null = null; // Image capturée pour le front ou back
  public backImage: WebcamImage | null = null; // Image capturée pour le back
  public trigger: Subject<void> = new Subject<void>();
  public currentStep: 'front' | 'back' | 'done' = 'front'; // Étapes du processus
  public response: any = null; // Réponse du backend
  public errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private imageService: ImageService) {}

  // Déclencher la capture
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  // Gérer l'image capturée
  public handleImage(webcamImage: WebcamImage): void {
    if (this.currentStep === 'front') {
      this.webcamImage = webcamImage;
      this.currentStep = 'back'; // Passe à l'étape suivante
    } else if (this.currentStep === 'back') {
      this.backImage = webcamImage;
      this.currentStep = 'done'; // Fin des étapes
    }
  }

  // Obtenir le flux vidéo
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  // Gérer les erreurs de la caméra
  public handleInitError(error: WebcamInitError): void {
    console.error('Webcam error:', error);
    this.errorMessage = 'Unable to access the camera. Please check your permissions.';
  }


  // Envoyer les données au backend
  public sendToBackend(): void {
    this.isLoading = true; // Activer le loader

    if (!this.webcamImage || !this.backImage) {
      this.errorMessage = 'Please capture both front and back images.';
      return;
    }

    const payload = {
      image: this.webcamImage.imageAsBase64.replace(/^data:image\/[a-z]+;base64,/, ''), // Enlève le préfixe
      imageBack: this.backImage.imageAsBase64.replace(/^data:image\/[a-z]+;base64,/, '') // Enlève le préfixe
    };

    this.imageService.scanImage(payload).subscribe(
      (response) => {
        this.response = response;
        this.errorMessage = '';
        this.isLoading = false; // Désactiver le loader

      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = error.error?.message || 'An error occurred while processing.';
      }
    );
  }
}
