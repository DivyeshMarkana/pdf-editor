import { Component, OnInit, ViewChild } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  // @ViewChild('fileInput') input: any

  constructor() { }

  ngOnInit(): void {
    PSPDFKit.load({
      // TODO: Add edit tool in toolbar
      toolbarItems: [
        ...PSPDFKit.defaultToolbarItems,
        {
          type: "content-editor",
        },
        // {
        //   type: 'undo'
        // },
        // {
        //   type: 'redo'
        // },
        // // TODO: Add custom tool 
        {
          type: "custom",
          id: "my-button",
          title: "",
          onPress: (event: Event) => {
            // this.input.click()
          }
        },

      ],
      // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      document: this.selectedFile ? this.selectedFile : "/assets/mac-resume.pdf",
      container: "#pspdfkit-container",

      // TODO: Configuration for only view mode 
      // initialViewState: new PSPDFKit.ViewState({ readOnly: true })

      // isEditableAnnotation: (annotation) =>
      //   !(annotation instanceof PSPDFKit.Annotations.InkAnnotation)
    }).then(instance => {
      // const item = {
      //   type: "custom",
      //   id: "my-button",
      //   title: "My Button",
      //   onPress: (event) => {
      //     alert("hello from my button");
      //   }
      // };

      // instance.setToolbarItems((items) => {
      //   items.push(item);
      //   return items;
      // });

      // ! Delete all annotations - not working
      // (async () => {
      //   const pagesAnnotations = await Promise.all(
      //     Array.from({ length: instance.totalPageCount }).map((_, pageIndex) =>
      //       instance.getAnnotations(pageIndex)
      //     )
      //   );
      //   const annotationIds = pagesAnnotations.flatMap(pageAnnotations =>
      //     pageAnnotations.map(annotation => annotation.id).toArray()
      //   );
      //   await instance.delete(annotationIds)
      // })();

      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.
      (window as any).instance = instance;

      // TODO: Set author name to pdf file
      // instance.setAnnotationCreatorName("MacD");

      // TODO: Set direct edit mode when pdf loads
      // instance.setViewState(v =>
      //   v.set('interactionMode', PSPDFKit.InteractionMode.CONTENT_EDITOR)
      // )
    });

    // PSPDFKit.preloadWorker({
    //   toolbarItems: [
    //     ...PSPDFKit.defaultToolbarItems,
    //     { type: "content-editor" }
    //   ],
    //   // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
    //   baseUrl: location.protocol + "//" + location.host + "/assets/",
    //   document: "/assets/mac-resume.pdf",
    //   container: "#pspdfkit-container",

    //   // TODO: Configuration for only view mode
    //   // initialViewState: new PSPDFKit.ViewState({ readOnly: true })

    //   // isEditableAnnotation: (annotation) =>
    //   //   !(annotation instanceof PSPDFKit.Annotations.InkAnnotation)
    // }).then(instance => {

    //   // ! Delete all annotations - not working
    //   // (async () => {
    //   //   const pagesAnnotations = await Promise.all(
    //   //     Array.from({ length: instance.totalPageCount }).map((_, pageIndex) =>
    //   //       instance.getAnnotations(pageIndex)
    //   //     )
    //   //   );
    //   //   const annotationIds = pagesAnnotations.flatMap(pageAnnotations =>
    //   //     pageAnnotations.map(annotation => annotation.id).toArray()
    //   //   );
    //   //   await instance.delete(annotationIds)
    //   // })();

    //   // For the sake of this demo, store the PSPDFKit for Web instance
    //   // on the global object so that you can open the dev tools and
    //   // play with the PSPDFKit API.
    //   (window as any).instance = instance;

    //   // TODO: Set author name to pdf file
    //   // instance.setAnnotationCreatorName("MacD");

    //   // TODO: Set direct edit mode when pdf loads
    //   // instance.setViewState(v =>
    //   //   v.set('interactionMode', PSPDFKit.InteractionMode.CONTENT_EDITOR)
    //   // )
    // });
  }

  selectedFile: any
  uploadFile(event: any) {
    // console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0].toString()
    // console.log(this.selectedFile);

    // TODO: load when selected file is available // ! code here

  }

  getFile(file: any, callback: any) {
    // callback.click
    // console.log(file);

  }
}
