

/**
 * Class Enseignant
 */
public class Enseignant extends Utilisateur {

  //
  // Fields
  //

  private Statut statut;
  
  //
  // Constructors
  //
  public Enseignant () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of statut
   * @param newVar the new value of statut
   */
  public void setStatut (Statut newVar) {
    statut = newVar;
  }

  /**
   * Get the value of statut
   * @return the value of statut
   */
  public Statut getStatut () {
    return statut;
  }

  //
  // Other methods
  //

}
