import { Component} from '@angular/core';
import { Batches } from './batches.model';
import { Program } from './batches.model';
import { Courses } from './batches.model';
import { Topic } from './batches.model';

@Component({
  selector: 'app-batches-programs',
  templateUrl: './batches-programs.component.html',
  styleUrls: ['./batches-programs.component.css']
})
export class BatchesProgramsComponent {

  dropdown = false
  topicMain = false // toggle

  programDropdown = false
  status = true;

  selectedValueDropName:string = ''
  selectedValueDropDate: string = ''

  selectedValueProgramDropname: string = ''

  openDropdown(){
      this.dropdown = true
  }

  openProgramDropdown(){
    this.programDropdown = true
  }

  closeProgramDropdown(){
    this.programDropdown = false
  }

  closeDropdown() {
    this.dropdown = false
  }  

  selectOption(index: any) {
    console.log(index)
    this.selectedValueDropName = index.name
    this.selectedValueDropDate = index.date
    this.dropdown = false
    this.status=false;

    // if(this.selectedValueDropName !== "" && this.selectedValueProgramDropname!==""){
    //   this.topicMain = true
    // }
    
  }

  selectProgramOption(index: any) {
    this.selectedValueProgramDropname = index.name
    this.programDropdown = false

    if(this.selectedValueDropName !== "" && this.selectedValueProgramDropname!==""){
      this.topicMain = true
    }
  }
  openAttendance(){
  }

  programs: Program[]=[
    new Program('Data Science'),
    new Program('Web Development'),
    new Program('My SQL'),
    new Program('PHP'),
    new Program('JAVA'),
    new Program('Dot Net'),
    new Program('BI')
  ];

  batches: Batches[] = [
    new Batches('Batch 2015','15 July 2015'),
    new Batches('Batch 2016','25 Aug 2016'),
    new Batches('Batch 2017','5 Sept 2017'),
    new Batches('Batch 2018','18 June 2018'),
    new Batches('Batch 2019','19  Aug 2019'),
    new Batches('Batch 2020','13 july 2020'),
    new Batches('Batch 2021','12 May 2022'),
    new Batches('Batch 2022','14 March 2023'),
    new Batches('Batch 2023','16 july 2024')
  ];

  course: Courses[]=[
     new Courses('1HTM','HTML Basics','HTML forms','20%'),
     new Courses('2CSS','CSS Basics','NA','100%'),
     new Courses('3JAVA','JAVA Basics','Multi Threading, Runnable','10%')
  ];

  topics:Topic[]=[
    new Topic('Tags,HTML layout,HTML Attributes,HTML'),
    new Topic('Css Syntax,simple Selector, Class selector,ID selector'),
    new Topic('JVM,Data types,Conditional Statements,loops,OOPs')
  ];
  
}
