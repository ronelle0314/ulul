import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BillService } from '../shared/bill/bill.service';
import { UploadFileService } from '../shared/upload/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent implements OnInit {
  reqs: Array<any>
  
  sampleError: String
  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }


  
  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.uploadService.getRequest().subscribe(data =>{
          this.reqs = data;
        })
      }
    })

    this.selectedFiles = undefined

   
    
  }
  //@Output() sendFilePathToAppComponentEvent = new EventEmitter<string>();   
  
  // fileUploaded(e) {
  //   this.sendFilePathToAppComponentEvent.emit(e.target.value);  
  //   this.billService.postTestToApi(); 
  // }
}
