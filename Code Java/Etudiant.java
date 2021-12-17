

/**
 * Class Etudiant
 */
public class Etudiant extends Utilisateur {

  //
  // Fields
  //

  private String matricule;
  private Filiere filiere;
  
  //
  // Constructors
  //
  public Etudiant () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of matricule
   * @param newVar the new value of matricule
   */
  public void setMatricule (String newVar) {
    matricule = newVar;
  }

  /**
   * Get the value of matricule
   * @return the value of matricule
   */
  public String getMatricule () {
    return matricule;
  }

  /**
   * Set the value of filiere
   * @param newVar the new value of filiere
   */
  public void setFiliere (Filiere newVar) {
    filiere = newVar;
  }

  /**
   * Get the value of filiere
   * @return the value of filiere
   */
  public Filiere getFiliere () {
    return filiere;
  }

  //
  // Other methods
  //

}
