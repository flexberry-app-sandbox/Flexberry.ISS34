﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ISS34
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// List inv.
    /// </summary>
    // *** Start programmer edit section *** (ListInv CustomAttributes)

    // *** End programmer edit section *** (ListInv CustomAttributes)
    [AutoAltered()]
    [Caption("List inv")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ListInvE", new string[] {
            "Name as \'Name\'"})]
    public class ListInv : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.ISS34.Investment fInvestment;
        
        private IIS.ISS34.Support fSupport;
        
        // *** Start programmer edit section *** (ListInv CustomMembers)

        // *** End programmer edit section *** (ListInv CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (ListInv.Name CustomAttributes)

        // *** End programmer edit section *** (ListInv.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (ListInv.Name Get start)

                // *** End programmer edit section *** (ListInv.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (ListInv.Name Get end)

                // *** End programmer edit section *** (ListInv.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListInv.Name Set start)

                // *** End programmer edit section *** (ListInv.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (ListInv.Name Set end)

                // *** End programmer edit section *** (ListInv.Name Set end)
            }
        }
        
        /// <summary>
        /// List inv.
        /// </summary>
        // *** Start programmer edit section *** (ListInv.Investment CustomAttributes)

        // *** End programmer edit section *** (ListInv.Investment CustomAttributes)
        [NotNull()]
        public virtual IIS.ISS34.Investment Investment
        {
            get
            {
                // *** Start programmer edit section *** (ListInv.Investment Get start)

                // *** End programmer edit section *** (ListInv.Investment Get start)
                IIS.ISS34.Investment result = this.fInvestment;
                // *** Start programmer edit section *** (ListInv.Investment Get end)

                // *** End programmer edit section *** (ListInv.Investment Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListInv.Investment Set start)

                // *** End programmer edit section *** (ListInv.Investment Set start)
                this.fInvestment = value;
                // *** Start programmer edit section *** (ListInv.Investment Set end)

                // *** End programmer edit section *** (ListInv.Investment Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.ISS34.Support.
        /// </summary>
        // *** Start programmer edit section *** (ListInv.Support CustomAttributes)

        // *** End programmer edit section *** (ListInv.Support CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.ISS34.Support Support
        {
            get
            {
                // *** Start programmer edit section *** (ListInv.Support Get start)

                // *** End programmer edit section *** (ListInv.Support Get start)
                IIS.ISS34.Support result = this.fSupport;
                // *** Start programmer edit section *** (ListInv.Support Get end)

                // *** End programmer edit section *** (ListInv.Support Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListInv.Support Set start)

                // *** End programmer edit section *** (ListInv.Support Set start)
                this.fSupport = value;
                // *** Start programmer edit section *** (ListInv.Support Set end)

                // *** End programmer edit section *** (ListInv.Support Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ListInvE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ListInvE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ListInvE", typeof(IIS.ISS34.ListInv));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ListInv.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfListInv CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfListInv CustomAttributes)
    public class DetailArrayOfListInv : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.ISS34.DetailArrayOfListInv members)

        // *** End programmer edit section *** (IIS.ISS34.DetailArrayOfListInv members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ListInv by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ListInv.
        /// </summary>
        public DetailArrayOfListInv(IIS.ISS34.Support fSupport) : 
                base(typeof(ListInv), ((ICSSoft.STORMNET.DataObject)(fSupport)))
        {
        }
        
        public IIS.ISS34.ListInv this[int index]
        {
            get
            {
                return ((IIS.ISS34.ListInv)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.ISS34.ListInv dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}