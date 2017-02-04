using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EFDemo.Models
{
    public class Insurance
    {
        [NotMapped]
        private const int Default_Code = 400;
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int InsuranceId { get; set; }
        [Required]
        [StringLength(30,MinimumLength=5)]
        [Display(Name="Customer Name")]
        public String Name { get; set; }
        [Required]
        [RegularExpression(@"[+]?[9][1]\d{10}",ErrorMessage="Phone Number should be in +919999999999 format")]
        public String PhoneNo { get; set; }
        [StringLength(50, MinimumLength = 5)]
        public String Address { get; set; }
         [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}",
ErrorMessage = "Email doesn't look like a valid email address.")]
        public String Email { get; set; }
        [Required]
        public long SumAssured { get; set; }
        [DefaultValue(Default_Code)]
        public String InsCode { get; set; }
        public int Premium { get; set; }
        public DateTime DOS { get; set; }
        public String Nominee { get; set; }
        
        
    }
}