import { Routes } from '@angular/router';
import { AddEmplyeeComponent } from './component/add-emplyee/add-emplyee.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { TemFormComponent } from './tem-form/tem-form.component';

export const routes: Routes = [
    {path:"emplyee",
      component:AddEmplyeeComponent  
    },
    {path:"data",
      component:DataBindingComponent  
    },
    {path:"TemForm",
      component:TemFormComponent  
    },
];
