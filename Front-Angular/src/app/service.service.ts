import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { base_url} from './app.module';
import { ActivatedRoute,Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  constructor(private http: HttpClient, public router:Router) { }

  //Register
  register(username:any,name:any,mdp:any,tel:any,email:any): Observable<any> {
    return this.http.post(base_url+'/users', {
      "username":username,
      "name":name,
      "mdp":mdp,
      "email":email,
      "tel":tel
    }, httpOptions);
  }

  //login
  login(username:any,mdp:any): Observable<any> {
    return this.http.post(base_url+'/authenticate', {
      "mdp":mdp,
      "username":username,
    }, httpOptions);
  }

  //decoded token
  me(token:any): Observable<any> {
    return this.http.post(base_url+'/me', {
        "token" : token
    }, httpOptions);
  }

  //depotVoiture
  depotVoiture(matricule:any, model:any, marque:any, user : any, token : any): Observable<any>{
    return this.http.post(base_url+'/depotVoiture', {
       "matricule" : matricule,
       "model" : model,
       "marque" : marque,
       "user" : user,
       "token" : token
    }, httpOptions);
  }

 

  //liste dépot voitures
  getlisteVoitureDeposer(token : any): Observable<any>{
    const headers = new HttpHeaders({ 'x-access-token': token });
      return this.http.get(base_url+'/listeVoituresDeposer', {headers});
  }
  //liste de piece
  getListePiece(token : any): Observable<any>{
    const headers = new HttpHeaders({ 'x-access-token': token });
      return this.http.get(base_url+'/listePiece', {headers});
  }

  //reception voitures 
  receptionVoiture(id:any, token : any, statut : any): Observable<any>{
     return this.http.put(base_url+'/receptionVoiture/'+id, {
        "token" : token,
        "statut" : statut
     });
  }

  ///liste voiture client
  listeVoitureByClient(id: any, token : any): Observable<any>{
    const headers = new HttpHeaders({ 'x-access-token': token });
     return this.http.get(base_url+'/listeVoitureByClient/'+id, {headers});
  }

  //logout
  logout(type : any){
      if(type == "0"){
        localStorage.removeItem('token_client');
        this.router.navigateByUrl('/');
      }
      if(type == "1"){
        localStorage.removeItem('token_atelier');
        this.router.navigateByUrl('/');
      }
      if(type == "2"){
        localStorage.removeItem('token_financier');
        this.router.navigateByUrl('/');
      }
      
  }


  //reparation
  reparation(token : any, designation : any, prix_reparation : any, id : any, pieces : any, quantite :any): Observable<any>{
      return this.http.post(base_url+"/reparation/"+id, {
        "token" : token,
        "designation" : designation,
        "prix_reparation" : prix_reparation,
        "id" : id,
        "idPiece" : pieces,
        "quantite" : quantite
      }, httpOptions)
  }

  //addPiece
  addPiece(token : any, designation : any, quantite : any, prix_unitaire : any): Observable<any>{
     return this.http.post(base_url+"/addPiece", {
      "token" : token,
      "designation" :designation,
      "quantite" : quantite,
      "prix_unitaire" : prix_unitaire
     }, httpOptions)
  }

 
  //montantPieces
  getListePieceMontant(token : any,id : any): Observable<any>{
    const headers = new HttpHeaders({ 'x-access-token': token });
    return this.http.get(base_url+'/montantPiece/'+id, {headers});
  }

  //TotalMontantReparation
  getTotalMontantReparation(token : any,id : any): Observable<any>{
    const headers = new HttpHeaders({ 'x-access-token': token });
    return this.http.get(base_url+'/montantReparation/'+id, {headers});
  }


  //listeDepotTerminer
  getListDepotFinish(token : any): Observable<any>{
    const headers = new HttpHeaders({ 'x-access-token': token });
    return this.http.get(base_url+'/listeDepotTerminer', {headers});
  }

  //addFacture
  addFacture(token : any, idDepot : any, montant : any): Observable<any>{
      return this.http.post(base_url+'/addFacture', {
         "token" : token,
         "idDepot" : idDepot,
         "montant" : montant
      }, httpOptions);
  }

}
