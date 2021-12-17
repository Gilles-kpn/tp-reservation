

/**
 * Class Reservation
 */
public class Reservation {

  //
  // Fields
  //

  private String dateDeFin;
  private String dateDeDebut;
  private Enseignant enseignant;
  private Reservable reservable;
  
  //
  // Constructors
  //
  public Reservation () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of dateDeFin
   * @param newVar the new value of dateDeFin
   */
  public void setDateDeFin (String newVar) {
    dateDeFin = newVar;
  }

  /**
   * Get the value of dateDeFin
   * @return the value of dateDeFin
   */
  public String getDateDeFin () {
    return dateDeFin;
  }

  /**
   * Set the value of dateDeDebut
   * @param newVar the new value of dateDeDebut
   */
  public void setDateDeDebut (String newVar) {
    dateDeDebut = newVar;
  }

  /**
   * Get the value of dateDeDebut
   * @return the value of dateDeDebut
   */
  public String getDateDeDebut () {
    return dateDeDebut;
  }

  /**
   * Set the value of enseignant
   * @param newVar the new value of enseignant
   */
  public void setEnseignant (Enseignant newVar) {
    enseignant = newVar;
  }

  /**
   * Get the value of enseignant
   * @return the value of enseignant
   */
  public Enseignant getEnseignant () {
    return enseignant;
  }

  /**
   * Set the value of reservable
   * @param newVar the new value of reservable
   */
  public void setReservable (Reservable newVar) {
    reservable = newVar;
  }

  /**
   * Get the value of reservable
   * @return the value of reservable
   */
  public Reservable getReservable () {
    return reservable;
  }

  //
  // Other methods
  //

}
