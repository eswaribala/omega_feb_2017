using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EFDemo.Models
{
    public class Patient
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int PatientCode { get; set; }
        public String Name { get; set; }
        public DateTime DOB { get; set; }
        public Gender GenderValue { get; set; }
        public int InsuranceId { get; set; }
        [ForeignKey("InsuranceId")]
        public Insurance insurance { get; set; }
    }
}